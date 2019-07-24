import {combineAndWrapReducers} from '../../combine-and-wrap-reducers';

import Pagination from '../../../state/search/pagination/index';
import links from './links';
import navigation from './navigation';

export function makeReducer() {
    const reducers = {
        links,
        navigation
    };

    const combinedReducer = combineAndWrapReducers(reducers, Pagination);

    return (state, action) => {
        return combinedReducer(state, action);
    };
}
