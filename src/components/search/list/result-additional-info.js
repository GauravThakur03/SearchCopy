import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ResultAdditionalInfo = ({ list }) => {
    return (
        <div className='new-search-result-additional-info'>
            <span>

                <FormattedMessage id={'MODEL_YEAR'} />{': '}
                {list.year}
            </span>
        </div>
    );
};

ResultAdditionalInfo.propTypes = {
    list: PropTypes.object
};

export default ResultAdditionalInfo;
