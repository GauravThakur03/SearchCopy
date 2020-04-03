import t from 'tcomb';

const Result = t.struct({
    baseCodes: t.maybe(t.Array),
    countrySite: t.maybe(t.String),
    description: t.maybe(t.String),
    searchImage: t.maybe(t.String),
    snippet: t.maybe(t.String),
    subType: t.String,
    title: t.maybe(t.String),
    url: t.maybe(t.String),
    year: t.maybe(t.Number)
}, 'Result');

export default Result;
