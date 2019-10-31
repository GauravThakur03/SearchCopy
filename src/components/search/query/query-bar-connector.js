import {connect as reduxConnect} from 'react-redux';

import QueryBar from './query-bar';
import {loadXML, saveQuery, loadSuggestion} from '../../../action-creator/actions';

function mapStateToProps(state) {
    return {
        query: state.search.urlParams.query || ''
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeQuery: (query) => {
            dispatch(saveQuery({
                query
            }));
            dispatch(loadXML());
        },
        loadSuggestion: (searchTerm) => {
            return loadSuggestion(searchTerm).then((suggestions) => JSON.parse(suggestions)).catch((suggestions) => suggestions);
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(QueryBar);
