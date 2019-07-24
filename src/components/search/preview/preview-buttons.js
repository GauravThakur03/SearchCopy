import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage, injectIntl, intlShape} from 'react-intl';

const PreviewButtons = (props) => {
    const id = props.on ? 'CLOSE_PREVIEW' : 'PREVIEW';

    return (
        <a
            className='preview-icon'
            onClick={props.onClick}
            title={props.intl.formatMessage({
                id
            })}
        >
            <FormattedMessage id={id}/>
        </a>
    );
};

PreviewButtons.propTypes = {
    intl: intlShape.isRequired,
    on: PropTypes.bool,
    onClick: PropTypes.func
};

export default injectIntl(PreviewButtons);
