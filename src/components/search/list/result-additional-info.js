import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

/* eslint-disable react/no-danger */
const ResultAdditionalInfo = ({list}) => {
    return (
        <div className='new-search-result-additional-info'>
            <FormattedMessage id={'MODEL_YEAR'}/>{': '}
            <span
                dangerouslySetInnerHTML={
                    {
                        __html: list.year
                    }
                }
            />
        </div>
    );
};

ResultAdditionalInfo.propTypes = {
    list: PropTypes.object
};

export default ResultAdditionalInfo;
