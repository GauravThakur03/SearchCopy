import React from 'react';
import PropTypes from 'prop-types';

import ResultTitle from './result-title';
import Snippet from './snippet';

const ListContainer = ({
    list,
    onPreview,
    query,
    shouldPreview,
    shouldShowImage
}) => {
    const full = shouldShowImage && !shouldPreview && list.searchImage ? '' : 'full';

    return (
        <div className={`copy col-xs-24 col-sm-16 col-lg-18 ${full}`}>
            <ResultTitle
                list={list}
                onPreview={onPreview}
                query={query}
            />
            {
                !shouldPreview ? <Snippet list={list}/> : null
            }
        </div>
    );
};

ListContainer.propTypes = {
    list: PropTypes.object,
    onPreview: PropTypes.func,
    query: PropTypes.string,
    shouldPreview: PropTypes.bool,
    shouldShowImage: PropTypes.bool
};

export default ListContainer;
