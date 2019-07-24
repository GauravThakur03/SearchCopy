import {connect as reduxConnect} from 'react-redux';

import Header from './header';
import {loadHeaderAndFooterByLocale} from '../../action-creator/actions';

function mapDispatchToProps(dispatch) {
    return {
        loadHeader: (url) => {
            return dispatch(loadHeaderAndFooterByLocale(url)).then((content) => content);
        }
    };
}

export default reduxConnect(undefined, mapDispatchToProps)(Header);
