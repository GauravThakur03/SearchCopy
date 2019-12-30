import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import Filter from './filter';
import ShowMore from './show-more';
import {sortBy, sortModel} from '../../utils/util';

class FilterGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            more: true
        };
        this.onShowMoreLess = this.onShowMoreLess.bind(this);
    }

    onShowMoreLess() {
        this.setState((state) => ({
            more: !state.more
        }));
    }

    render() {
        const filters = Object.assign([], this.props.filters);

        this.props.category === 'MODEL_YEAR' ? sortModel(filters) : filters.sort(sortBy('label'));

        return (
            <div className='filter-group'>
                <h4>
                    <FormattedMessage id={this.props.category}/>
                </h4>
                <div className='filter active'>
                    <div className='content'>
                        <fieldset>
                            <legend className='visuallyhidden'>
                                <FormattedMessage id={this.props.category}/>
                            </legend>
                            <ul className='fancy-checkbox-group'>
                                {
                                    filters.map((bin, index) => {
                                        return this.state.more && index >= this.props.moreLessLimit ? null : (<Filter
                                            appliedFilter={this.props.appliedFilter}
                                            bin={bin}
                                            key={index}
                                            onFilter={this.props.onFilter}
                                            query={this.props.query}
                                        />);
                                    })
                                }
                                {
                                    this.props.moreLess && filters.length > this.props.moreLessLimit ? <ShowMore
                                        more={this.state.more}
                                        onClick={this.onShowMoreLess}
                                    /> : null}
                            </ul>
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }
}

FilterGroup.propTypes = {
    appliedFilter: PropTypes.object,
    category: PropTypes.string,
    filters: PropTypes.array,
    moreLess: PropTypes.bool,
    moreLessLimit: PropTypes.string,
    onFilter: PropTypes.func,
    query: PropTypes.string
};

export default FilterGroup;
