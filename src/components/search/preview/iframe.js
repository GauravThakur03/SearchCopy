import React from 'react';
import PropTypes from 'prop-types';

export default class IFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate() {
        return !this.props.loaded;
    }

    render() {
        return this.props.active ? <iframe
            frameBorder='0'
            height='614'
            onLoad={this.props.onLoad}
            src={this.props.src}
            width='100%'
        >
            {this.props.children}
        </iframe> : null;
    }
}

IFrame.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string,
    loaded: PropTypes.bool,
    onLoad: PropTypes.func,
    src: PropTypes.string
};
