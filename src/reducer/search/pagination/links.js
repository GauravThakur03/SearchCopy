import {
    SET_PAGINATION_LINKS
} from '../../../actions';

function setPaginationLinks(state, action) {
    return action.links || [];
}

export default function (state = [], action) {
    const actionHandlers = {
        [SET_PAGINATION_LINKS]: setPaginationLinks
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
