import 'isomorphic-fetch';

import {sendResponse, xml2Json} from '../utils/util';

export function loadSearch(query) {
    const url = 'http://localhost:7000/loadXML';
    const endPoint = `${url}?${query}`;

    return fetch(endPoint)
        .then((response) => {
            if (response.ok) {
                return response.text().then((xml) => {
                    return sendResponse(xml);
                });
            }
            throw response;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function loadHTMLFromUrl(url) {
    return fetch(url)
        .then((response) => response.text())
        .catch((error) => {
            return error.json().then((json) => {
                throw json;
            });
        });
}

export function searchSettings(locale) {
    const endPoint = `../../api/${locale}.xml`;

    return fetch(endPoint)
        .then((response) => {
            if (response.ok) {
                return response.text().then((xml) => {
                    return xml2Json(xml);
                });
            }
            throw response;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}

export function fetchSuggestions(searchTerm) {
    const url = 'https://search.deere.com/cgi-bin/velocity?v.app=autocomplete-json&v.function=autocomplete-collection&bag-of-words=true&filter=&dictionary=deere-ddc-xml-dictionary-autocomplete,deere-ddc-xml-product-autocomplete&num=10';
    const endPoint = `${url}&str=${searchTerm}`;

    return fetch(endPoint)
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            throw response;
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}
