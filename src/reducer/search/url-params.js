import {
    SET_PARAMS
} from '../../actions';

const defaultState = {};

function setSelection(state, action) {
    return action.removePagination ? action.params : {
        ...state,
        ...action.params
    };
}

export default function (state = defaultState, action) {
    const actionHandlers = {
        [SET_PARAMS]: setSelection
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
