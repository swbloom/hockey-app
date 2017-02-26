import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { getTeams } from './actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

store.dispatch(getTeams());

ReactDOM.render(<Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
);
