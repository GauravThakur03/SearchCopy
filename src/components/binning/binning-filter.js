import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import FilterGroup from './filter-group';

const BinningFilter = (props) => {
    return (
        <aside
            className='template-panel left-rail col-lg-6'
            id='filter-aside'
        >
            <div
                className='template-panel-content'
                id='ls-row-3-col-1-row-2-col-1-row-1-area-1'
            >
                <div
                    className='filter-search-results-component'
                    id='filters-5de52e73-9630-4169-43c0-8c1adfb03e30'
                >
                    <div className='filters'>
                        <div className='filter-group ns-results-count'>
                            <div className='filter active'>
                                <div className='content'>
                                    <fieldset>
                                        <ul className='fancy-checkbox-group'>
                                            <li className='ns-count-leaf'>
                                                <label className='content-type'>
                                                    <a>{props.totalResults} <FormattedMessage id='RESULTS'/></a>
                                                </label>
                                            </li>
                                        </ul>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <FilterGroup
                            appliedFilter={props.appliedFilter}
                            category={'PRODUCT_CATEGORY'}
                            filters={props.binning.productCategory}
                            onFilter={props.onFilter}
                            query={props.query}
                        />
                        <FilterGroup
                            appliedFilter={props.appliedFilter}
                            category={'CONTENT_TYPE'}
                            filters={props.binning.contentType}
                            onFilter={props.onFilter}
                            query={props.query}
                        />
                        <FilterGroup
                            appliedFilter={props.appliedFilter}
                            category={'MODEL_YEAR'}
                            filters={props.binning.modelYear}
                            moreLess={true}
                            moreLessLimit='4'
                            onFilter={props.onFilter}
                            query={props.query}
                        />
                    </div>
                </div>
            </div>
        </aside>
    );
};

BinningFilter.propTypes = {
    appliedFilter: PropTypes.object,
    binning: PropTypes.object,
    onFilter: PropTypes.func,
    query: PropTypes.string,
    totalResults: PropTypes.number
};

export default BinningFilter;
