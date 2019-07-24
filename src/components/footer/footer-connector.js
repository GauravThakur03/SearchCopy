import {connect as reduxConnect} from 'react-redux';

import Footer from './footer';
import {loadHeaderAndFooterByLocale} from '../../action-creator/actions';

function mapDispatchToProps(dispatch) {
    return {
        loadFooter: (url) => {
            return dispatch(loadHeaderAndFooterByLocale(url)).then((content) => content);
        }
    };
}

export default reduxConnect(undefined, mapDispatchToProps)(Footer);
