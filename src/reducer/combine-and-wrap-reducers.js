import {combineReducers} from 'redux';

export function combineAndWrapReducers(reducers, model) {
    const combinedReducers = combineReducers(reducers);

    return (state, action) => {
        const result = combinedReducers({
            ...state
        }, action);

        return model(result);
    };
}
