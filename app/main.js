import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers/index.js'

import Index from './index/Index';

const createStoreWithMiddleware = applyMiddleware(
	promise, thunk
)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" >
				<IndexRoute component={Index} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));	
