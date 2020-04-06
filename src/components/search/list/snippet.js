import React from 'react';
import PropTypes from 'prop-types';

import ResultDiscription from './result-description';
import ResultAdditionalInfo from './result-additional-info';

const Snippet = ({list}) => {
    const showDiscription = list.url.indexOf('/shells/') === -1;

    return (
        <div className='ns-snippet'>
            {showDiscription && <ResultDiscription list={list}/>}
            <ResultAdditionalInfo list={list}/>
        </div>
    );
};

Snippet.propTypes = {
    list: PropTypes.object
};

export default Snippet;
