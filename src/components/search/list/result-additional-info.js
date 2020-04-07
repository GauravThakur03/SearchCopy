import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const padding = {
    false: 'paddingTop10',
    true: ''
};

/* eslint-disable react/no-danger */
const ResultAdditionalInfo = ({
    list,
    paddingCondition
}) => {
    return (
        <div className={`new-search-result-additional-info ${padding[paddingCondition]}`}>
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
    list: PropTypes.object,
    paddingCondition: PropTypes.bool
};

export default ResultAdditionalInfo;
