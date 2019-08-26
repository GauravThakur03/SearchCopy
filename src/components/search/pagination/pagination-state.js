import React from 'react';
import PropTypes from 'prop-types';

const PaginationState = ({
    changePage,
    currentPage,
    state
}) => {
    const nextOrPrevPage = (value) => () => {
        const page = value === 'pagination-next' ? currentPage + 1 : currentPage - 1;

        return changePage(page);
    };

    return (
        <div
            className={`${state} active`}
            onClick={nextOrPrevPage(state)}
            value={state}
        />
    );
};

PaginationState.propTypes = {
    changePage: PropTypes.func,
    currentPage: PropTypes.number,
    state: PropTypes.string
};

export default PaginationState;
