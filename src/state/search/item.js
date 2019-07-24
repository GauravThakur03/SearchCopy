import t from 'tcomb';

const Item = t.struct({
    key: t.String,
    label: t.String,
    value: t.String
}, 'Item');

export default Item;
