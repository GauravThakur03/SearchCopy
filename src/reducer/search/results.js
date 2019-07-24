import {
    SET_RESULTS
} from '../../actions';

function resultList(state, action) {
    return action.results;
}

export default function (state = [], action) {
    const actionHandlers = {
        [SET_RESULTS]: resultList
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
