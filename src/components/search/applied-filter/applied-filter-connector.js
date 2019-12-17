import {connect as reduxConnect} from 'react-redux';

import {applyFilter, clearFilter, loadXML} from '../../../action-creator/actions';

import AppliedFilter from './applied-filter';

function mapStateToProps(state) {
    return {
        appliedFilters: Object.keys(state.search.binning.appliedFilters),
        query: state.search.urlParams.query,
        settings: state.search.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFilter: (selection, query) => {
            const filter = {
                key: selection,
                value: ''
            };

            if (selection === '') {
                dispatch(clearFilter());
            } else {
                dispatch(applyFilter(filter));
            }
            if (query) {
                dispatch(loadXML());
            }
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(AppliedFilter);
