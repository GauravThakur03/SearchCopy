import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const AppliedFilter = (props) => {
    const findTranslation = (filter) => {
        const modelFilter = props.settings.modelYear.find((model) => model.key === filter);
        const productFilter = props.settings.productCategory.find((product) => product.key === filter);
        const contentTypeFilter = props.settings.contentType.find((content) => content.key === filter);

        return modelFilter || productFilter || contentTypeFilter;
    };

    const remove = (filter) => () => {
        props.removeFilter(filter, props.query);
    };

    return props.appliedFilters.length ? <div className='filter-tags-search-results-component'>
        {
            props.appliedFilters.map((filter, key) => {
                const translatedFilter = findTranslation(filter);

                return (
                    <button
                        className='button-filter-tag year'
                        key={key}
                        onClick={remove(filter)}
                        type='button'
                    >
                        {translatedFilter.label}
                        <span
                            className='icon-jd_close'
                        />
                    </button>
                );
            })
        }
        <button
            className='button-filters-clear'
            onClick={remove('')}
            type='button'
        >
            <FormattedMessage id={'CLEAR_FILTERS'}/>
        </button>
    </div>
        : null;
};

AppliedFilter.propTypes = {
    appliedFilters: PropTypes.array,
    removeFilter: PropTypes.func,
    settings: PropTypes.object
};

export default AppliedFilter;
