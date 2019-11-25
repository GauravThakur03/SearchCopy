import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';

/* eslint-disable react/no-danger */
const ResultDiscription = ({
    intl,
    list
}) => {
    const baseCodes = intl.formatMessage({
        id: 'BASECODES'
    });
    const value = list.baseCodes ? `${baseCodes}: ${list.baseCodes.join(',')}` : list.snippet;

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
