import {connect as reduxConnect} from 'react-redux';

import {applyFilter} from '../../action-creator/actions';

import BinningFilter from './binning-filter';

function mapStateToProps(state) {
    return {
        appliedFilter: state.search.binning.appliedFilters,
        binning: state.search.settings,
        totalResults: state.search.pagination.navigation.totalRecords
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFilter: (selcetion) => {
            dispatch(applyFilter(selcetion));
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(BinningFilter);
