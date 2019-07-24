import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
const ResultTitle = ({list}) => {
    return (
        <h4>
            <a
                dangerouslySetInnerHTML={
                    {
                        __html: list.title
                    }
                }
                href={list.url}
            />
        </h4>
    );
};

ResultTitle.propTypes = {
    list: PropTypes.object
};

export default ResultTitle;
