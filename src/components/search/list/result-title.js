import React from 'react';
import PropTypes from 'prop-types';

import IconsBar from '../preview/icons-bar';
import {updateHistory} from '../../../utils/util';

/* eslint-disable react/no-danger */
const ResultTitle = ({
    list,
    onPreview,
    query
}) => {
    const updateHistoryURL = () => {
        const pushURL = updateHistory(query);

        history.pushState(null, '', pushURL);
    };

    return (
        <h4 className={'preview-title'}>
            <a
                dangerouslySetInnerHTML={
                    {
                        __html: list.title
                    }
                }
                href={list.url}
                onClick={updateHistoryURL}
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
    onPreview: PropTypes.func,
    query: PropTypes.string
};

export default ResultTitle;
