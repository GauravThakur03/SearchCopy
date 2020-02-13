import 'isomorphic-fetch';

import {sendResponse, xml2Json} from '../utils/util';
import {searchSettingXmlURL, autoSuggestionsURL} from '../utils/config';

export function loadSearch(query, url) {
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
    const endPoint = `${searchSettingXmlURL}${locale}.xml`;

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
    const endPoint = `${autoSuggestionsURL}&str=${searchTerm}`;

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
