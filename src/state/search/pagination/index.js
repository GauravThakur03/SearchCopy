import t from 'tcomb';

import Link from './link';
import Navigation from './navigation';

const PAGE_NUMBER = 10;

const Pagination = t.struct({
    links: t.list(Link),
    navigation: Navigation
}, 'Pagination');

export function defaultState() {
    return {
        navigation: {
            currentPage: 1,
            perPage: PAGE_NUMBER,
            totalRecords: 0
        }
    };
}

export default Pagination;
