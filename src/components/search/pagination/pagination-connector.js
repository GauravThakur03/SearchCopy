import {connect as reduxConnect} from 'react-redux';

import {loadXML, saveQuery, updatePagination} from '../../../action-creator/actions';

import Pagination from './pagination';

function mapStateToProps(state) {
    return {
        pagination: state.search.pagination
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onPageChange: (pagination) => {
            const {
                currentPage,
                ...query
            } = pagination;

            dispatch(updatePagination({
                currentPage
            }));
            dispatch(saveQuery(query));
            dispatch(loadXML());
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(Pagination);
