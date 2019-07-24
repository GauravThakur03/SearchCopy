import React from 'react';
import {Provider} from 'react-redux';

import {createStore} from '../store/store-factory';
import AppContainerConnector from './app-container-connector';

const store = createStore();

function AppProvider(props) {
    return (
        <Provider store={store}>
            <AppContainerConnector {...props}/>
        </Provider>
    );
}

export default AppProvider;
