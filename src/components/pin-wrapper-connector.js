import {connect as reduxConnect} from 'react-redux';

import {clearFilter} from '../action-creator/actions';

import PinWrapper from './pin-wrapper';

function mapStateToProps(state) {
    return {
        totalResults: state.search.pagination.navigation.totalRecords
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearFilter: () => {
            dispatch(clearFilter());
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(PinWrapper);
