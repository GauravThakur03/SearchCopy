import React from 'react';
import PropTypes from 'prop-types';
import IFrame from './iframe';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
        this.iframeLoaded = this.iframeLoaded.bind(this);
    }

    remove(node, footerNode) {
        if (node && footerNode) {
            node.parentNode.removeChild(node);
            footerNode.parentNode.removeChild(footerNode);
        }
    }

    iframeLoaded(event) {
        const doc = event.target.contentDocument;

        if (doc) {
            const node = doc.getElementsByClassName('featured-head')[0] || doc.getElementById('headerSection');
            const footerNode = doc.getElementsByTagName('footer')[0];

            this.remove(node, footerNode);
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
                        active={this.props.active}
                        loaded={this.state.loaded}
                        onLoad={this.iframeLoaded}
                        src={this.props.list.url}
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
