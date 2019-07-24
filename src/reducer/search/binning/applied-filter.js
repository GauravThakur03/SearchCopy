import {
    CLEAR_FILTERS,
    SET_APPLIED_SELECTION
} from '../../../actions';

function insertFilter(state, filter) {
    return {
        ...state,
        ...filter
    };
}

function removeByKey(state, deleteKey) {
    return Object.keys(state)
        .filter((key) => key !== deleteKey.toString())
        .reduce((result, current) => {
            result[current] = state[current];
            return result;
        }, {});
}

function setSelection(state, action) {
    const filters = Object.keys(state);
    const final = filters.indexOf(action.key.toString()) !== -1 ? removeByKey(state, action.key) : insertFilter(state, action.val);

    return final;
}

function clearFilters() {
    return {};
}

export default function (state = {}, action) {
    const actionHandlers = {
        [CLEAR_FILTERS]: clearFilters,
        [SET_APPLIED_SELECTION]: setSelection
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
