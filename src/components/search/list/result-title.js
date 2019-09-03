import React from 'react';
import PropTypes from 'prop-types';

import IconsBar from '../preview/icons-bar';

/* eslint-disable react/no-danger */
const ResultTitle = ({
    list,
    onPreview
}) => {
    return (
        <h4 className={'preview-title'}>
            <a
                dangerouslySetInnerHTML={
                    {
                        __html: list.title
                    }
                }
                href={list.url}
            />
            <IconsBar
                list={list}
                onPreview={onPreview}
            />
        </h4>
    );
};

ResultTitle.propTypes = {
    list: PropTypes.object,
    onPreview: PropTypes.func
};

export default ResultTitle;
