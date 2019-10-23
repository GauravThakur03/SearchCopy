import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
const ResultDiscription = ({list}) => {
    const value = list.baseCodes ? `<span><b>Base Codes: </b>${list.baseCodes.join(',')}` : list.snippet;

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
    list: PropTypes.object
};

export default ResultDiscription;
