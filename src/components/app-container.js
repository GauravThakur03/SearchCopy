import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import HeaderConnector from './header/header-connector';
import FooterConnector from './footer/footer-connector';
import IntlProviderConnector from './intl-provider-connector';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: this.props.location.query['country-site'] || 'en_GB'
        };
    }

    componentWillMount() {
        if (this.props.location.query['country-site']) {
            this.props.loadConfigurations(this.props.location.query['country-site']);
        }
        this.props.loadXML(this.props.location.query);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.locale !== this.props.locale) {
            this.props.loadConfigurations(nextProps.locale);

            this.setState({
                locale: nextProps.locale
            });
        }
    }

    render() {
        return Object.keys(this.props.messages).length ? (
            <IntlProviderConnector
                lang={this.state.locale}
                messages={this.props.messages}
            >
                <Fragment>
                    <div className={'wrapper clearfix'}>
                        <HeaderConnector {...this.state}/>
                        {React.cloneElement(this.props.children, {
                            ...this.state
                        })}
                    </div>
                    <FooterConnector {...this.state}/>
                </Fragment>
            </IntlProviderConnector>
        ) : null;
    }
}

AppContainer.propTypes = {
    children: PropTypes.element,
    loadConfigurations: PropTypes.func,
    loadXML: PropTypes.func,
    locale: PropTypes.string,
    location: PropTypes.object,
    messages: PropTypes.object
};

export default AppContainer;
