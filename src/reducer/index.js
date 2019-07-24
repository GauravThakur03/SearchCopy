import State from '../state/state';
import {combineAndWrapReducers} from './combine-and-wrap-reducers';
import {makeReducer as combineSearchReducers} from './search';

export function makeReducer() {
    const reducers = {
        search: combineSearchReducers()
    };

    return combineAndWrapReducers(reducers, State);
}
