import {connect as reduxConnect} from 'react-redux';

import AppContainer from './app-container';
import {loadXML, saveQuery, configurations, applyFilter} from '../action-creator/actions';
import {getQuery} from '../utils/util';

const query = getQuery();

function findLocale(state) {
    return state.search.results.length ? state.search.results[0].countrySite : '';
}

function mapStateToProps(state) {
    return {
        loader: state.search.loader,
        locale: query['country_site'] || findLocale(state),
        messages: state.search.settings.translations,
        query
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadConfigurations: (locale) => {
            dispatch(configurations(locale));
        },
        loadXML: (urlParams) => {
            const {
                year,
                ...queryParams
            } = urlParams;

            dispatch(saveQuery(queryParams));

            if (year) {
                const model = `year==${year.replace(/\D/g, '')}`;
                const filter = {
                    key: year.replace(/\D/g, ''),
                    value: model
                };

                dispatch(applyFilter(filter));
            } else {
                dispatch(loadXML());
            }
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(AppContainer);
