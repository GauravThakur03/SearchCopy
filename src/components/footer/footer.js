import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
        this.url = '../../api/footer.html';
    }

    componentDidMount() {
        if (this.props.locale !== '') {
            this.props.loadFooter(this.url).then((html) => this.setState({
                content: html
            }));
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.locale) {
            this.props.loadFooter(this.url).then((html) => this.setState({
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
