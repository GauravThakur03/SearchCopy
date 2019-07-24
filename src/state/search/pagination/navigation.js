import t from 'tcomb';

const Navigation = t.struct({
    currentPage: t.Number,
    perPage: t.Number,
    totalRecords: t.Number
}, 'Navigation');

export default Navigation;
