const teams = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TEAM':
			return [...state,
				{
					_id: action._id,
					name: action.name
				}
		];
		case 'DISPLAY_TEAMS':
			return action.teams;
			
		default:
			return state
	}
}

	

export default teams;