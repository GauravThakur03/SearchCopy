import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconsBar from './preview/icons-bar';
import Content from './preview/content';
import ListContainer from './list/list-container';
import Image from './image';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
        this.onPreview = this.onPreview.bind(this);
    }

    onPreview() {
        this.setState((state) => ({
            active: !state.active
        }));
    }

    render() {
        return (
            <div className='expand-collapse-component-item shown search-results-listing-component container available'>
                <IconsBar
                    list={this.props.item}
                    onPreview={this.onPreview}
                />
                <Image
                    list={this.props.item}
                    shouldShowImage={this.props.shouldShowImage}
                />
                <ListContainer
                    list={this.props.item}
                    shouldShowImage={this.props.shouldShowImage}
                />
                <Content
                    active={this.state.active}
                    activeClass={this.state.active ? 'active' : ''}
                    list={this.props.item}
                />
            </div>
        );
    }
}

Result.propTypes = {
    item: PropTypes.object,
    shouldShowImage: PropTypes.bool
};

export default Result;
