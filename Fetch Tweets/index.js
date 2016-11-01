import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'; 
import logger from 'redux-logger'; 
import thunk from 'redux-thunk';
import reducer from './reducers';
import Layout from './components/Layout';

const store = createStore(
	reducer, 
	applyMiddleware(thunk, logger())
);

render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('app')
);

