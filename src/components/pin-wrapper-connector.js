import {connect as reduxConnect} from 'react-redux';

import {clearFilter, loadXML} from '../action-creator/actions';

import PinWrapper from './pin-wrapper';

function mapStateToProps(state) {
    return {
        query: state.search.urlParams.query,
        totalResults: state.search.pagination.navigation.totalRecords
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearFilter: (query) => {
            dispatch(clearFilter());
            if (query) {
                dispatch(loadXML());
            }
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(PinWrapper);
