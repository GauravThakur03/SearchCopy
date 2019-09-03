import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import PreviewButtons from './preview-buttons';

class IconsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: false
        };
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
    }

    handlePreviewClick(e) {
        this.setState((state) => ({
            on: !state.on
        }));
        this.props.onPreview();
        e.preventDefault();
    }

    render() {
        return (
            <div className='ns-sr-icons'>
                <a
                    className='open-new'
                    href={this.props.list.url}
                    target='_blank'
                    title={this.props.intl.formatMessage({
                        id: 'OPEN_NEW_WINDOW'
                    })}
                >
                    <i className='material-icons'>{'open_in_new'}</i>
                </a>
                <PreviewButtons
                    on={this.state.on}
                    onClick={this.handlePreviewClick}
                />
            </div>
        );
    }
}

IconsBar.propTypes = {
    intl: intlShape.isRequired,
    list: PropTypes.object,
    onPreview: PropTypes.func
};

export default injectIntl(IconsBar);
