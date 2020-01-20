import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import PaginationState from './pagination-state';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.setPage = this.setPage.bind(this);

        this.root = 'root|root-';
    }

    setPage(currentPage, pageText) {
        const text = pageText ? pageText : this.pages[currentPage - 1].text;
        const vState = `${this.root}${text}`;
        const pagination = {
            currentPage,
            'v:state': encodeURI(vState)
        };

        this.props.onPageChange(pagination);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    createLinks() {
        let links = null;

        if (this.pages) {
            links = this.pages.map((link, key) => {
                const page = Math.ceil(link.end / this.props.pagination.navigation.perPage);
                const isCurrent = this.props.pagination.navigation.currentPage === page ? 'current' : '';

                return (
                    <a
                        key={key}
                        onClick={this.setPage.bind(null, page, link.text)}
                        value={page}
                    >
                        <span className={`page-link active ${isCurrent}`}>{page}</span>
                    </a>
                );
            });
        }
        return links;
    }

    createNextOrPrevLinks(isShow, linkType) {
        let link = null;

        if (isShow) {
            link = (
                <PaginationState
                    changePage={this.setPage}
                    currentPage={this.props.pagination.navigation.currentPage}
                    state={linkType}
                />
            );
        }
        return link;
    }

    render() {
        const {links} = this.props.pagination;

        this.pages = links.filter((page) => !page.type);
        this.prev = links.find((page) => page.type && page.type === 'previous');
        this.next = links.find((page) => page.type && page.type === 'next');

        return (
            <div className='pagination-search shown multiple-pages'>
                {this.createNextOrPrevLinks(this.prev, 'pagination-prev')}
                <div className='pagination-numbers'>
                    <a/>
                    { this.createLinks()}
                    <a/>
                </div>
                {
                    this.pages.length ? <div className='pagination-state'>
                        <div className='page-current'>{this.props.pagination.navigation.currentPage}</div>
                        <FormattedMessage id={'OF'}/>
                        <div className='page-last'>{this.pages.length}</div>
                    </div>
                        : null
                }
                {this.createNextOrPrevLinks(this.next, 'pagination-next')}
            </div>
        );
    }
}

Pagination.propTypes = {
    onPageChange: PropTypes.func,
    pagination: PropTypes.object
};

export default Pagination;
