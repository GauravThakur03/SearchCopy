import React from 'react';
import ReactDOM from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './src/factory/route';

ReactDOM.render(
    <div>
    	<Router history={browserHistory} routes={routes} />
    </div>
	, document.getElementById('root')
);