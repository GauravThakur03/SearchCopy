import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

class ContextMessage extends Component {
    constructor(props) {
        super(props);
        this.searchEntireSite = this.searchEntireSite.bind(this);
    }

    searchEntireSite() {
        const params = Object.assign({}, this.props.location.query);

        delete params.year;
        window.location.href = `/search?${Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')}`;
    }

    render() {
        return this.props.location.query.year ? <div className='contextual-msg'>
            <a className='nsc-msg'><FormattedMessage id={'CONTEXT_SEARCH_MESSAGE'}/></a>
            <a
                className='search-entire-site'
                onClick={this.searchEntireSite}
            >
                <FormattedMessage id={'SEARCH_ENTIRE_LINK'}/>
            </a>
        </div>
            : null;
    }
}

ContextMessage.propTypes = {
    location: PropTypes.object
};

export default ContextMessage;
