import t from 'tcomb';

const Binning = t.struct({
    appliedFilters: t.dict(t.union([t.String, t.Number]), t.union([t.String, t.Number]))
}, 'Binning');

export default Binning;
