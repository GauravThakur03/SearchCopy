import t from 'tcomb';

import Search from './search';

const State = t.struct({
    search: Search
}, 'State');

export default State;
