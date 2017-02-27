const team = (state = {}, action) => {
	switch(action.type) {
		case 'DISPLAY_TEAM':
			return action.team;

		default:
			return state
	}
}

	

export default team;