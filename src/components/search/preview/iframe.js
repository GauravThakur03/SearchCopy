import React from 'react';
import PropTypes, { func, bool } from 'prop-types';

export default class IFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !this.props.loaded;
    }

    render() {
        return (this.props.active &&
            <iframe
                frameBorder='0'
                height='614'
                onLoad={this.props.onLoad}
                src={this.props.src}
                width='100%'
            >
                {this.props.children}
            </iframe>
        );
    }
}

IFrame.propTypes = {
    onLoad: func,
    src: PropTypes.string,
    active: bool,
    loaded: bool
};
