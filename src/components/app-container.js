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
            this.loadScipts();
            this.props.loadConfigurations(this.state.locale).then(() => {
                this.props.processQuery();
                this.loadSearchCollection();
            });
        }
    }

    loadScipts() {
        const topAnalytics = document.createElement('script');
        const bottomAnalytics = document.createElement('script');

        const topUrl = `/sales/salesmanual/ssi/NA/analytics/top_analytics_${this.state.locale}.js`;
        const bottomUrl = `/sales/salesmanual/ssi/NA/analytics/bottom_analytics_${this.state.locale}.js`;

        topAnalytics.setAttribute('src', topUrl);
        topAnalytics.setAttribute('type', 'text/javascript');
        document.head.appendChild(topAnalytics);

        bottomAnalytics.setAttribute('src', bottomUrl);
        bottomAnalytics.setAttribute('type', 'text/javascript');
        document.body.appendChild(bottomAnalytics);
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
    processQuery: PropTypes.func,
    query: PropTypes.object
};

export default AppContainer;
