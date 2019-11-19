import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {getQuery} from '../../utils/util';

class ContextMessage extends Component {
    constructor(props) {
        super(props);
        this.searchEntireSite = this.searchEntireSite.bind(this);

        this.query = getQuery();
    }

    searchEntireSite() {
        const params = Object.assign({}, this.query);

        ['year', 'products'].forEach(k => delete params[k]);

        window.location.href = `/sales/salesmanual/ssi/searchResults.html?${Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')}`;
    }

    render() {
        return this.query.year ? <div className='contextual-msg'>
            <a className='nsc-msg'><FormattedMessage id={'CONTEXT_SEARCH_MESSAGE'}/>&nbsp;</a>
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

export default ContextMessage;
