import {connect as reduxConnect} from 'react-redux';

import Results from './results';

function mapStateToProps(state) {
    return {
        results: state.search.results
    };
}

export default reduxConnect(mapStateToProps)(Results);
