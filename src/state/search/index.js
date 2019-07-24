import t from 'tcomb';

import Binning from './binning';
import Pagination from './pagination';
import Result from './result';
import Settings from './settings';

const Search = t.struct({
    binning: Binning,
    pagination: Pagination,
    results: t.list(Result),
    settings: Settings,
    urlParams: t.dict(t.String, t.maybe(t.String))
}, 'Search');

export default Search;
