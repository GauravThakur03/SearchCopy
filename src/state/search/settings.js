import t from 'tcomb';
import Item from './item';

const Settings = t.struct({
    contentType: t.list(Item),
    displayImages: t.String,
    modelYear: t.list(Item),
    productCategory: t.list(Item),
    searchBaseUrl: t.String,
    translations: t.dict(t.String, t.String)
}, 'Settings');

export function defaultState() {
    return {
        contentType: [],
        displayImages: 'false',
        modelYear: [],
        productCategory: [],
        searchBaseUrl: '',
        translations: {}
    };
}

export default Settings;
