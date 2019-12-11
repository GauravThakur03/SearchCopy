import {connect as reduxConnect} from 'react-redux';

import AppContainer from './app-container';
import {loadXML, saveQuery, configurations, applyFilter} from '../action-creator/actions';
import {getQuery} from '../utils/util';

const query = getQuery();

function findLocale(state) {
    return state.search.results.length ? state.search.results[0].countrySite : '';
}

function setSubTypeFilter(contentType, dispatch, subType) {
    if (subType) {
        const value = contentType.filter((type) => type.key === subType)[0].value;

        const filter = {
            key: subType,
            value
        };

        dispatch(applyFilter(filter));
    } else {
        dispatch(loadXML());
    }
}

function mapStateToProps(state) {
    return {
        contentType: state.search.settings.contentType,
        loader: state.search.loader,
        locale: query.country_site || findLocale(state),
        messages: state.search.settings.translations,
        query
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadConfigurations: (locale) => {
            return dispatch(configurations(locale));
        },
        loadXML: (urlParams, contentType) => {
            const {
                sub_type: subType,
                year,
                ...queryParams
            } = urlParams;

            dispatch(saveQuery(queryParams));

            if (year) {
                const decodeYear = decodeURIComponent(year).replace(/\D/g, '');
                const model = `year==${decodeYear}`;
                const filter = {
                    key: decodeYear,
                    value: model
                };

                dispatch(applyFilter(filter));
            } else {
                setSubTypeFilter(contentType, dispatch, subType);
            }
        }
    };
}

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    loadXML: (urlParams) => {
        dispatchProps.loadXML(urlParams, stateProps.contentType);
    }
});

export default reduxConnect(mapStateToProps, mapDispatchToProps, mergeProps)(AppContainer);
