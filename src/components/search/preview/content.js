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

    removeHeaderAndFooter(headerNode, footerNode) {
        if (headerNode) {
            headerNode.parentNode.removeChild(headerNode);
        }
        if (footerNode) {
            footerNode.parentNode.removeChild(footerNode);
        }
    }

    isTitleNode(doc) {
        return doc.getElementById('title-field-prep-equipment') || doc.getElementById('title-product-launch-center') || doc.getElementsByClassName('section-title ')[0];
    }

    removeTitle(doc) {
        const titleNode = this.isTitleNode(doc);

        if (titleNode) {
            titleNode.parentNode.removeChild(titleNode);
        }
    }

    iframeLoaded(event) {
        const doc = event.target.contentDocument;

        if (doc) {
            const headerNode = doc.getElementsByClassName('featured-head')[0] || doc.getElementById('headerSection');
            const footerNode = doc.getElementsByTagName('footer')[0];

            this.removeHeaderAndFooter(headerNode, footerNode);
            this.removeTitle(doc);
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
