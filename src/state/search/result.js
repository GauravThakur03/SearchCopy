import t from 'tcomb';

const Result = t.struct({
    countrySite: t.String,
    description: t.maybe(t.String),
    lastUpdated: t.maybe(t.String),
    snippet: t.String,
    title: t.String,
    url: t.String,
    year: t.maybe(t.Number)
}, 'Result');

export default Result;
