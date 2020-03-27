import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';

const showBaseCodes = (label, baseCode) => {
    return baseCode ? `${label}: ${baseCode.join(',')}` : '';
};

/* eslint-disable react/no-danger */
const ResultDiscription = ({
    intl,
    list
}) => {
    const baseCodes = intl.formatMessage({
        id: 'BASECODES'
    });
    const value = list.subType === 'Model' ? showBaseCodes(baseCodes, list.baseCodes) : list.snippet;

    return (
        <p
            className='new-search-result-description'
            dangerouslySetInnerHTML={
                {
                    __html: value
                }
            }
        />
    );
};

ResultDiscription.propTypes = {
    intl: intlShape.isRequired,
    list: PropTypes.object
};

export default injectIntl(ResultDiscription);
