import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const PinWrapper = (props) => {
    const clear = () => {
        props.clearFilter(props.query);
    };

    return (
        <div
            className='pin-wrapper'
            id='pin-wrapper'
        >
            <div className='filter-bar-search-results-component'>
                <div className='filter-bar-mobile'>
                    <div className='relative'>
                        <div className='filter-row filter-row-1'>
                            <div className='row'>
                                <div className='col-xs-24 filter-col-1'>
                                    <div className='btn-filter-selector'>
                                        <a
                                            className='button6'
                                            onClick={props.toggleFilters}
                                        >
                                            <span className='btn-filter'>
                                                <FormattedMessage id={'SHOW_FILTERS'}/>
                                            </span>
                                        </a>
                                    </div>
                                    <div className='filter-result'>
                                        <span className='number-of-results'>{props.totalResults} <FormattedMessage id={'RESULTS'}/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-row filter-row-2'>
                            <div className='row'>
                                <div className='filter-col-1'>
                                    <div className='left-btn'>
                                        <a
                                            className='button6 btn-show-results'
                                            onClick={props.toggleFilters}
                                        >
                                            <FormattedMessage id={'VIEW_RESULTS'}/>
                                        </a>
                                    </div>
                                </div>
                                <div className='filter-col-2'>
                                    <div className='right-btn'>
                                        <a
                                            className='clear-filter-link'
                                            onClick={clear}
                                        >
                                            <FormattedMessage id={'CLEAR_FILTERS'}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='filter-row filter-row-3'>
                            <div className='row'>
                                <div className='col-xs-12 filter-col-1'>
                                    <div className='left-btn'>
                                        <a
                                            className='button6 btn-show-results'
                                            onClick={props.toggleFilters}
                                        >
                                            <FormattedMessage id={'VIEW_RESULTS'}/>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-xs-12 filter-col-2'>
                                    <div className='right-btn'>
                                        <a
                                            className='button1 btn-show-filters'
                                            onClick={props.toggleFilters}
                                        >
                                            <FormattedMessage id={'SHOW_FILTERS'}/>
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

PinWrapper.propTypes = {
    clearFilter: PropTypes.func,
    query: PropTypes.string,
    toggleFilters: PropTypes.func,
    totalResults: PropTypes.number
};

export default PinWrapper;
