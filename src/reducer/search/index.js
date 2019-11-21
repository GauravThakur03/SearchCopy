import {combineAndWrapReducers} from '../combine-and-wrap-reducers';
import Search from '../../state/search';

import {makeReducer as combineBinningReducers} from './binning';
import {makeReducer as combinePaginationReducers} from './pagination';
import results from './results';
import urlParams from './url-params';
import settings from './settings';
import loader from './loader';

export function makeReducer() {
    const reducers = {
        binning: combineBinningReducers(),
        loader,
        pagination: combinePaginationReducers(),
        results,
        settings,
        urlParams
    };

    return combineAndWrapReducers(reducers, Search);
}
