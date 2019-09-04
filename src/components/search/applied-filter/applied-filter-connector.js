import {connect as reduxConnect} from 'react-redux';

import {applyFilter, clearFilter} from '../../../action-creator/actions';

import AppliedFilter from './applied-filter';

function mapStateToProps(state) {
    return {
        appliedFilters: Object.keys(state.search.binning.appliedFilters),
        settings: state.search.settings
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFilter: (selection) => {
            const filter = {
                key: selection,
                value: ''
            };

            selection === '' ? dispatch(clearFilter()) : dispatch(applyFilter(filter));
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(AppliedFilter);
