import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import AppProvider from '../components/app-provider';
import MainContainer from '../components/main-container';

export default (
    <Route
        component={AppProvider}
        path='/'
    >
        <IndexRedirect to='search'/>
        <Route
            component={MainContainer}
            path='/search'
        />
    </Route>
);
