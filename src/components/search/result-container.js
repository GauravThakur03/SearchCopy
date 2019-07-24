import React from 'react';

import QueryBarConnector from './query/query-bar-connector';
import AppliedFilterConnector from './applied-filter/applied-filter-connector';
import ResultsConnector from './results-connector';
import PaginationConnector from './pagination/pagination-connector';

const ResultContainer = () => {
    return (
        <div className='template-panel main-content col-lg-18'>
            <QueryBarConnector/>
            <AppliedFilterConnector/>
            <ResultsConnector/>
            <PaginationConnector/>
        </div>
    );
};

export default ResultContainer;
