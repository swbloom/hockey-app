const conferences = (state = [], action) => {
	switch(action.type) {
		case 'DISPLAY_CONFERENCES':
			return action.conferences;
			
		default:
			return state
	}
}

	

export default conferences;