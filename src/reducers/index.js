import { combineReducers } from 'redux';
import team from './team.js';
import teams from './teams.js';
import player from './player.js';
import players from './players.js';
import conferences from './conferences.js';


const rootReducer = combineReducers({
	team,
	teams,
	player,
	players,
	conferences
})

export default rootReducer;