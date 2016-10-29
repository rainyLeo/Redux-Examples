import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const Counter = ({ value, onIncrease, onDecrease }) => (
	<div>
		{value} times
		<button onClick={onIncrease}>Increase</button>
		<button onClick={onDecrease}>Decrease</button>
	</div>
);

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREASE':
			return state + 1;
		case 'DECREASE':
			return state - 1;
		default:
			return state;
	}
};

const store = createStore(reducer);

const mapStateToProps = (state) => ({
	value: state
});

const mapDispatchToProps = (dispatch) => ({
	onIncrease: () => {
		dispatch({ type: 'INCREASE' });
	},
	onDecrease: () => {
		dispatch({ type: 'DECREASE' });
	}
});

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);






