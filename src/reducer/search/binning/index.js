import {combineAndWrapReducers} from '../../combine-and-wrap-reducers';

import Binning from '../../../state/search/binning/index';
import appliedFilters from './applied-filter';

export function makeReducer() {
    const reducers = {
        appliedFilters
    };

    const combinedReducer = combineAndWrapReducers(reducers, Binning);

    return (state, action) => {
        return combinedReducer(state, action);
    };
}
