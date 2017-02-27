const player = (state = {}, action) => {
	switch(action.type) {
		case 'DISPLAY_PLAYER':
			return action.player;
		default:
			return state
	}
}

	

export default player;