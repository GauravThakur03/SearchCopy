import t from 'tcomb';

const Link = t.struct({
    end: t.Number,
    start: t.Number,
    text: t.String,
    type: t.maybe(t.String)
}, 'Link');

export default Link;
