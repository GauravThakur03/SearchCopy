import {connect as reduxConnect} from 'react-redux';

import Results from './results';

function mapStateToProps(state) {
    return {
        displayImages: state.search.settings.displayImages.toLowerCase() === 'true',
        query: state.search.urlParams.query,
        results: state.search.results
    };
}

export default reduxConnect(mapStateToProps)(Results);
