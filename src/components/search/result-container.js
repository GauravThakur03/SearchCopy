import React from 'react';
import PropTypes from 'prop-types';

import QueryBarConnector from './query/query-bar-connector';
import AppliedFilterConnector from './applied-filter/applied-filter-connector';
import ResultsConnector from './results-connector';
import PaginationConnector from './pagination/pagination-connector';
import ContextMessage from './context-message';
import Spinner from './spinner';

const ResultContainer = (props) => {
    return (
        <div className='template-panel main-content col-lg-18'>
            <QueryBarConnector/>
            <AppliedFilterConnector/>
            <ContextMessage {...props}/>
            <Spinner showLoader={Boolean(props.loader)}/>
            {!props.loader && <ResultsConnector/>}
            {!props.loader && <PaginationConnector/>}
        </div>
    );
};

export default ResultContainer;

ResultContainer.propTypes = {
    loader: PropTypes.number
};
