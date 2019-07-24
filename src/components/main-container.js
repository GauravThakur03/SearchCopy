import React from 'react';

import BinningFilterConnector from './binning/binning-filter-connector';
import ResultContainer from './search/result-container';
import PinWrapper from './pin-wrapper';

const MainContainer = () => {
    return (
        <div className='plc-toc'>
            <div className='search-results-listing-template background-1'>
                <PinWrapper/>
                <div className='container'>
                    <div className='row relative'>
                        <BinningFilterConnector/>
                        <ResultContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
