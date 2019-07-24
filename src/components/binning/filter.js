import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (bin) => () => {
        this.props.onFilter(bin);
    }

    render() {
        const {bin} = this.props;
        const checked = this.props.appliedFilter.hasOwnProperty(bin.key) ? 'checked' : '';
        const label = isNaN(bin.key) ? (<FormattedMessage id={bin.key}/>) : (<span>{bin.key}</span>);

        return (
            <li>
                <label
                    className='multilevel'
                    htmlFor={bin.id}
                >
                    <div className='checker'>
                        <span className={checked}>
                            <input
                                className={'checkbox'}
                                id={bin.id}
                                name={bin.id}
                                onChange={this.handleChange(bin)}
                                type={'checkbox'}
                            />
                        </span>
                    </div>
                    <a>{bin.label}</a>
                </label>
            </li>
        );
    }
}

Filter.propTypes = {
    appliedFilter: PropTypes.object,
    bin: PropTypes.object,
    onFilter: PropTypes.func
};

export default Filter;
