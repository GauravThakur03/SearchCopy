import React from 'react';
import PropTypes from 'prop-types';
import IFrame from './iframe'

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
        this.iframeLoaded = this.iframeLoaded.bind(this);
    }

    iframeLoaded(event) {
        const doc = event.target.contentDocument;
debugger;
        if (doc) {
            const node = doc.getElementsByClassName('featured-head')[0] || doc.getElementById('headerSection');
            const footerNode = doc.getElementsByTagName('footer')[0];

            node && node.parentNode.removeChild(node);
            footerNode && footerNode.parentNode.removeChild(footerNode);
        }

        this.setState({
            loaded: true
        });
    }

    render() {
        return (
            <div className={`acdn-content ${this.props.activeClass}`}>
                <div className={this.state.loaded ? 'ns-iframe-wrapper ns-visible' : 'ns-iframe-wrapper'}>
                    <IFrame
                        onLoad={this.iframeLoaded}
                        src={this.props.list.url}
                        active={this.props.active}
                        loaded={this.state.loaded}
                    >
                        {'Something went wrong.'}
                    </IFrame>
                </div>
            </div>
        );
    }
}

Content.propTypes = {
    active: PropTypes.bool,
    activeClass: PropTypes.string,
    list: PropTypes.object
};
