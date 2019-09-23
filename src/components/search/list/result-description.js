import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
const ResultDiscription = ({list}) => {
    return (
        <p
            className='new-search-result-description'
            dangerouslySetInnerHTML={
                {
                    __html: list.snippet
                }
            }
        />
    );
};

ResultDiscription.propTypes = {
    list: PropTypes.object
};

export default ResultDiscription;
