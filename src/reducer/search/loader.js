import {
    SET_LOADER
} from '../../actions';

function setLoader(action) {
    return action.loader;
}

export default function (state = 0, action) {
    const actionHandlers = {
        [SET_LOADER]: setLoader
    };
    const reducer = actionHandlers[action.type];

    return reducer ? reducer(action) : state;
}
