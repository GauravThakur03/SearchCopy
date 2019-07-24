import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const ResultPreview = ({list}) => {
    return (
        <div className='ns-sr-icons absolute'>
            <a
                className='open-new'
                href={list.url}
                target='_blank'
                title='Open in new window'
            >
                <i className='material-icons'>{'open_in_new'}</i>
            </a>
            <a
                className='preview-icon preview-on'
                title='Preview'
            >
                <FormattedMessage id={'PREVIEW'}/>
            </a>
            <a
                className='preview-icon preview-off'
                title='Close preview'
            >
                <FormattedMessage id={'CLOSE_PREVIEW'}/>
            </a>
        </div>
    );
};

ResultPreview.propTypes = {
    list: PropTypes.object
};

export default ResultPreview;

