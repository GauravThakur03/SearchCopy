import {connect as reduxConnect} from 'react-redux';

import AppContainer from './app-container';
import {loadXML, saveQuery, configurations, applyFilter} from '../action-creator/actions';

function findLocale(ownProps, state) {
    return state.search.results.length ? state.search.results[0].countrySite : '';
}

function mapStateToProps(state, ownProps) {
    return {
        locale: ownProps.location.query['country-site'] || findLocale(ownProps, state),
        messages: state.search.settings.translations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadConfigurations: (locale) => {
            dispatch(configurations(locale));
        },
        loadXML: (urlParams) => {
            const {
                products,
                year,
                ...query
            } = urlParams;

            if (year || products) {
                const model = `model-year==${year.replace(/\D/g, '')}`;
                const filter = {
                    key: year.replace(/\D/g, ''),
                    value: model
                };

                dispatch(applyFilter(filter));
            }
            dispatch(saveQuery(query));
            dispatch(loadXML());
        }
    };
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(AppContainer);
