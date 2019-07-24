import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
        this.url = '../../api/header.html';
    }

    componentDidMount() {
        if (this.props.locale !== '') {
            this.props.loadHeader(this.url).then((html) => this.setState({
                content: html
            }));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.locale) {
            this.props.loadHeader(this.url).then((html) => this.setState({
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

Header.propTypes = {
    loadHeader: PropTypes.func,
    locale: PropTypes.string
};

export default Header;
