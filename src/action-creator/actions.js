import {
    CLEAR_FILTERS,
    SET_PAGINATION_LINKS,
    SET_NAVIGATION,
    SET_RESULTS,
    SET_APPLIED_SELECTION,
    SET_LOADER,
    SET_PARAMS,
    SETTINGS
} from '../actions';
import {loadSearch, loadHTMLFromUrl, searchSettings, fetchSuggestions} from '../repositories/http-service';
import {buildQueryString, generateSettings} from '../utils/util';

const ele = document.getElementById('ipl-progress-indicator');

export function loadXML() {
    return (dispatch, getState) => {
        const state = getState().search;
        const query = buildQueryString(state);

        dispatch({
            loader: state.loader + 1,
            type: SET_LOADER
        });

        return loadSearch(query, state.settings.searchBaseUrl)
            .then((data) => {
                const navigation = {
                    perPage: data.list.per,
                    totalRecords: data.totalResults
                };

                dispatch({
                    navigation,
                    type: SET_NAVIGATION
                });
                dispatch({
                    results: data.results,
                    type: SET_RESULTS
                });
                dispatch({
                    links: data.navigation ? data.navigation.link : [],
                    type: SET_PAGINATION_LINKS
                });
            })
            .catch((error) => {
                return error;
            }).then(() => {
                dispatch({
                    loader: getState().search.loader - 1,
                    type: SET_LOADER
                });
                setTimeout(() => {
                    ele.classList.add('available');
                });
            });
    };
}

export function loadHeaderAndFooterByLocale(url) {
    return () => {
        return loadHTMLFromUrl(url)
            .then((data) => {
                return data;
            })
            .catch(() => {
                return false;
            });
    };
}

export function updatePagination(navigation) {
    return {
        navigation,
        type: SET_NAVIGATION
    };
}

export function saveQuery(params, removePagination) {
    return (dispatch, getState) => {
        const urlParams = getState().search.urlParams;

        if (removePagination) {
            const savedParams = Object.keys(urlParams).reduce((object, param) => {
                if (param !== 'v:state') {
                    object[param] = urlParams[param];
                }
                return object;
            }, {});

            const parameters = {
                ...savedParams,
                ...params
            };

            dispatch({
                params: parameters,
                removePagination: true,
                type: SET_PARAMS
            });
            dispatch(updatePagination({
                currentPage: 1
            }));
        }
        dispatch({
            params,
            type: SET_PARAMS
        });
    };
}

export function applyFilter({
    key,
    value
}) {
    return (dispatch, getState) => {
        const urlParams = getState().search.urlParams;
        const isPaginated = urlParams['v:state'];
        const val = {
            [key]: value
        };

        dispatch({
            key,
            type: SET_APPLIED_SELECTION,
            val
        });

        if (isPaginated) {
            const params = Object.keys(urlParams).reduce((object, param) => {
                if (param !== 'v:state') {
                    object[param] = urlParams[param];
                }
                return object;
            }, {});

            dispatch({
                params,
                removePagination: true,
                type: SET_PARAMS
            });
            dispatch(updatePagination({
                currentPage: 1
            }));
        }
    };
}

export function clearFilter() {
    return (dispatch) => {
        dispatch({
            type: CLEAR_FILTERS
        });
    };
}

export function configurations(locale) {
    return (dispatch) => {
        return searchSettings(locale)
            .then((data) => {
                const settings = generateSettings(data.settings);

                dispatch({
                    settings,
                    type: SETTINGS
                });

                ele.classList.add('available');
                return true;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    };
}

export function loadSuggestion(searchTerm) {
    return fetchSuggestions(searchTerm)
        .then((response) => {
            return response;
        })
        .catch(() => {
            return [];
        });
}
