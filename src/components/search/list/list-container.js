import React from 'react';
import PropTypes from 'prop-types';

import ResultTitle from './result-title';
import Snippet from './snippet';

const ListContainer = ({
    list,
    shouldShowImage
}) => {
    const full = shouldShowImage ? '' : 'full';

    return (
        <div className={`copy col-xs-24 col-sm-16 col-lg-18 ${full}`}>
            <ResultTitle list={list}/>
            <Snippet list={list}/>
        </div>
    );
};

ListContainer.propTypes = {
    list: PropTypes.object,
    shouldShowImage: PropTypes.bool
};

export default ListContainer;
