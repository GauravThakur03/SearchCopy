import React from 'react';

const PinWrapper = () => {
    return (
        <div className='pin-wrapper'>
            <div className='filter-bar-search-results-component'>
                <div className='filter-bar-mobile'>
                    <div className='relative'>
                        <div className='filter-row filter-row-1'>
                            <div className='row'>
                                <div className='col-xs-24 filter-col-1'>
                                    <div className='btn-filter-selector'>
                                        <a className='button6'>
                                            <span className='btn-filter'>
                                                <span>{'Show Filters'}</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className='filter-result'>
                                        <span className='number-of-results'>{'100 Results'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-row filter-row-2'>
                            <div className='row'>
                                <div className='col-xs-14 filter-col-1'>
                                    <div className='left-btn'>
                                        <a className='button6 btn-show-results'>
                                            <span>{'View Results'}</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-xs-10 filter-col-2'>
                                    <div className='right-btn'>
                                        <a className='button6 nsw-btn'>
                                            {'Clear Filters'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-row filter-row-3'>
                            <div className='row'>
                                <div className='col-xs-12 filter-col-1'>
                                    <div className='left-btn'>
                                        <a className='button6 btn-show-results'>
                                            <span>{'View Results'}</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-xs-12 filter-col-2'>
                                    <div className='right-btn'>
                                        <a className='button1 btn-show-filters'>
                                            {'Show Filters'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinWrapper;
