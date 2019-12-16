import {connect as reduxConnect} from 'react-redux';

import {applyFilter, loadXML} from '../../action-creator/actions';

import BinningFilter from './binning-filter';

function mapStateToProps(state) {
    return {
        appliedFilter: state.search.binning.appliedFilters,
        binning: state.search.settings,
        query: state.search.urlParams.query,
        totalResults: state.search.pagination.navigation.totalRecords
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFilter: (selcetion, query) => {
            dispatch(applyFilter(selcetion));
            if (query) {
                dispatch(loadXML());
            }
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(BinningFilter);
