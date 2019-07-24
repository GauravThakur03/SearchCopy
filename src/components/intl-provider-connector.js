import {connect as reduxConnect} from 'react-redux';

import IntlProviderComponent from './intl-provider-component';

function mapStateToProps(state, ownProps) {
    return {
        locale: ownProps.lang === '' ? 'en' : ownProps.lang.toLowerCase().split(/[_-]+/)[0]
    };
}

export default reduxConnect(mapStateToProps)(IntlProviderComponent);
