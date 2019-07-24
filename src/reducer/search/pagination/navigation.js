import {
    SET_NAVIGATION
} from '../../../actions';

import {defaultState} from '../../../state/search/pagination/index';

function setNavigation(state, action) {
    return {
        ...state,
        ...action.navigation
    };
}

export default function (state = defaultState().navigation, action) {
    const actionHandlers = {
        [SET_NAVIGATION]: setNavigation
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
