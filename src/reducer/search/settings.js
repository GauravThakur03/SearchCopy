import {
    SETTINGS
} from '../../actions';

import {defaultState} from '../../state/search/settings';

function settings(state, action) {
    return action.settings;
}

export default function (state = defaultState(), action) {
    const actionHandlers = {
        [SETTINGS]: settings
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(state, action) : state;
}
