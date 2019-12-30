import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {headerURL} from '../../utils/config';
import {onHeaderLoad} from '../../utils/util';

/* eslint-disable react/no-danger */
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
    }

    componentDidMount() {
        if (this.props.locale !== '') {
            const locale = this.props.locale.split('_');
            const url = locale[1] === 'NA' ? `${headerURL}/${locale[1]}/header_onepage.html` : `${headerURL}/${locale[1]}/${locale[0]}/header_onepage.html`;

            this.props.loadHeader(url).then((html) => {
                this.setState({
                    content: html
                });
                onHeaderLoad();
                this.loadAutoComplete();
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.locale !== this.props.locale) {
            const locale = this.props.locale.split('_');
            const url = locale[1] === 'NA' ? `${headerURL}/${locale[1]}/header_onepage.html` : `${headerURL}/${locale[1]}/${locale[0]}/header_onepage.html`;

            this.props.loadHeader(url).then((html) => {
                this.setState({
                    content: html
                });
                this.loadAutoComplete();
            });
        }
    }

    loadAutoComplete() {
        const autoCompleteBuild = document.createElement('script');

        autoCompleteBuild.setAttribute('src', '/sales/salesmanual/ssi/NA/assets/js/build.js');
        autoCompleteBuild.setAttribute('type', 'text/javascript');
        document.body.appendChild(autoCompleteBuild);
    }

    render() {
        return (
            <Fragment>
                {this.state.content && (
                    <div
                        className='full-width'
                        dangerouslySetInnerHTML={
                            {
                                __html: this.state.content
                            }
                        }
                        id='headerSection'
                    />
                )}
            </Fragment>
        );
    }
}

Header.propTypes = {
    loadHeader: PropTypes.func,
    locale: PropTypes.string
};

export default Header;
