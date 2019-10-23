import React from 'react';
import PropTypes from 'prop-types';

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

        if (doc) {
            const node = doc.getElementsByClassName('featured-head')[0];
            const footerNode = doc.getElementsByTagName('footer')[0];

            node.parentNode.removeChild(node);
            footerNode.parentNode.removeChild(footerNode);
        }

        this.setState({
            loaded: true
        });
    }

    render() {
        return (
            <div className={`acdn-content ${this.props.activeClass}`}>
                {
                    this.props.active
                        ? (
                            <div className={this.state.loaded ? 'ns-iframe-wrapper ns-visible' : 'ns-iframe-wrapper'}>
                                <iframe
                                    frameBorder='0'
                                    height='614'
                                    onLoad={this.iframeLoaded}
                                    src={this.props.list.url}
                                    width='100%'
                                >
                                    {'Either data not found at given url or This browser does not support object.'}
                                </iframe>
                            </div>
                        ) : null
                }
            </div>
        );
    }
}

Content.propTypes = {
    active: PropTypes.bool,
    activeClass: PropTypes.string,
    list: PropTypes.object
};
