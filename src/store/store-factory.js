import thunk from 'redux-thunk';
import {createStore as reduxCreateStore, applyMiddleware} from 'redux';

import {makeReducer} from '../reducer/index';

export function createStore() {
    const reducer = makeReducer();

    return reduxCreateStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
}
