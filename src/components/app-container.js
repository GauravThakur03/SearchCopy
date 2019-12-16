import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import HeaderConnector from './header/header-connector';
import FooterConnector from './footer/footer-connector';
import IntlProviderConnector from './intl-provider-connector';
import MainContainer from './main-container';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: this.props.query.country_site || 'en_NA'
        };
    }

    componentDidMount() {
        if (this.state.locale) {
            this.props.loadConfigurations(this.state.locale).then(() => {
                this.loadSearchCollection();
            });
        }
    }

    loadSearchCollection() {
        if (this.props.query.query) {
            this.props.loadXML(this.props.query);
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
                        <MainContainer
                            {...this.props}
                            {...this.state}
                        />
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
    messages: PropTypes.object,
    query: PropTypes.object
};

export default AppContainer;
