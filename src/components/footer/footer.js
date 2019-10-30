import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {footerURL} from '../../utils/config';

/* eslint-disable react/no-danger */
class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
    }

    componentDidMount() {
        if (this.props.locale !== '') {
            const locale = this.props.locale.split('_');
            const url = locale[1] === 'NA' ? `${footerURL}/${locale[1]}/footer_onepage.html` : `${footerURL}/${locale[1]}/${locale[0]}/footer_onepage.html`;

            this.props.loadFooter(url).then((html) => this.setState({
                content: html
            }));
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.locale !== this.props.locale) {
            const locale = this.props.locale.split('_');
            const url = locale[1] === 'NA' ? `${footerURL}/${locale[1]}/footer_onepage.html` : `${footerURL}/${locale[1]}/${locale[0]}/footer_onepage.html`;

            this.props.loadFooter(url).then((html) => this.setState({
                content: html
            }));
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.content && (
                    <div
                        dangerouslySetInnerHTML={
                            {
                                __html: this.state.content
                            }
                        }
                    />
                )}
            </Fragment>
        );
    }
}

Footer.propTypes = {
    loadFooter: PropTypes.func,
    locale: PropTypes.string
};

export default Footer;
