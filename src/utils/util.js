export const showImage = true;

export function xml2Json(xmlString) {
    /* global X2JS */
    const x2JS = new X2JS();

    return x2JS.xml_str2json(xmlString);
}

function generateValidKey(key) {
    return key.replace(/^([^a-zA-Z0-9])*/, '').replace(/(-|_)./g, (s) => s.slice(-1).toUpperCase());
}

function parseByType(value) {
    return isNaN(value) ? value : Number(value);
}

function recursiveKeyModifier(bin) {
    return bin.reduce((accumulator, binObject) => {
        // eslint-disable-next-line no-use-before-define
        const updatedBin = refactorObject(binObject);

        accumulator.push(updatedBin);
        return accumulator;
    }, []);
}

function refactorObject(obj) {
    return Object.keys(obj).reduce((expectedBin, key) => {
        const validKey = generateValidKey(key);

        if (Array.isArray(obj[key])) {
            expectedBin[validKey] = recursiveKeyModifier(obj[key]);
        } else if (typeof obj[key] === 'object') {
            expectedBin[validKey] = refactorObject(obj[key]);
        } else {
            expectedBin[validKey] = parseByType(obj[key]);
        }
        return expectedBin;
    }, {});
}

function compareLabel(labelA, labelB) {
    return labelA < labelB ? 1 : 0;
}

function compare(a1, b1, labelA, labelB) {
    return labelA > labelB ? -1 : compareLabel(labelA, labelB);
}

function getTypeValue(isModel, item) {
    return isModel ? [parseByType(item.__text)] : parseByType(item.__text);
}

function getAccumulator(item, accumulator) {
    const validKey = generateValidKey(item._name);
    const isModel = item._name === 'base_codes';

    if (!accumulator[validKey]) {
        accumulator[validKey] = getTypeValue(isModel, item);
    } else if (isModel) {
        accumulator[validKey].push(parseByType(item.__text));
    }
    return accumulator;
}

export function generateSearchList(document) {
    const list = Array.isArray(document) ? document : [document];
    const results = [];
    const match = ['title', 'year', 'snippet', 'url', 'description', 'country_site', 'base_codes', 'search_image'];

    list.map((doc) => {
        const content = doc.content.reduce((accumulator, item) => {
            if (match.includes(item._name)) {
                return getAccumulator(item, accumulator);
            }
            return accumulator;
        }, {});

        results.push(content);
    });
    return results;
}

export function sortModel(bins) {
    const tempBins = JSON.parse(JSON.stringify(bins));

    return tempBins.sort(function (a, b) {
        const labelA = a.label;
        const labelB = b.label;
        const labelA1 = parseByType(a.label);
        const labelB1 = parseByType(b.label);
        const a1 = typeof labelA1;
        const b1 = typeof labelB1;

        return a1 > b1 ? -1 : compare(a1, b1, labelA, labelB);
    });
}

export function refactorKeys(binningSet) {
    return recursiveKeyModifier(binningSet);
}

export function sendResponse(xml) {
    const {vce} = xml2Json(xml);

    if (!vce.list) {
        return Promise.reject(false);
    }

    const results = generateSearchList(vce.list.document);
    const {
        list,
        navigation
    } = refactorObject(vce);
    const locale = results.length && results[0].countrySite ? results[0].countrySite : 'en_GB';

    return {
        list,
        locale,
        navigation,
        results
    };
}

export function buildQuery(filters) {
    const query = filters.join('\n');

    return encodeURI(query);
}

export function buildQueryString(search) {
    const binningValues = Object.values(search.binning.appliedFilters);

    binningValues.push('model-year==All');
    const binningParam = buildQuery(binningValues);
    const binning = {
        'binning-state': binningParam
    };
    const params = {
        ...search.urlParams,
        ...binning
    };

    const queryString = Object.keys(params).map((key) => `${key}=${key === 'binning-state' ? params[key] : encodeURI(params[key])}`).join('&');

    return queryString;
}

export function generateSettings(settings) {
    const listSettings = ['contentTypeList', 'modelYearList', 'productCategoryList'];

    return Object.keys(settings).reduce((accum, setting) => {
        if (listSettings.includes(setting)) {
            const key = setting.replace('List', '');

            accum[key] = !Array.isArray(settings[setting][key]) ? [settings[setting][key]] : settings[setting][key];
        } else {
            accum[setting] = settings[setting];
        }
        return accum;
    }, {});
}
