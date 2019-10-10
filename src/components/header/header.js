import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {headerURL} from '../../utils/config';

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
            this.props.loadHeader(headerURL).then((html) => {
                this.setState({
                    content: html
                });
                /* global onHeaderLoad */
                onHeaderLoad();
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.locale !== this.props.locale) {
            this.props.loadHeader(headerURL).then((html) => this.setState({
                content: html
            }));
        }
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
