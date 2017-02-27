import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import TeamContainer from './components/containers/TeamContainer.js';
import PlayerContainer from './components/containers/PlayerContainer.js';
import PlayersContainer from './components/containers/PlayersContainer.js';
import CreateTeam from './components/containers/CreateTeam.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/teams/create" component={CreateTeam} />
		<Route path="/teams/:teamId" component={TeamContainer} />
		<Route path="/players" component={PlayersContainer} />
		<Route path="/players/:playerId" component={PlayerContainer} />
	</Router>
  </Provider>,
  document.getElementById('root')
);