const teams = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TEAM':
			return [...state,
				{
					_id: action.id,
					name: action.name
				}
			]
		case 'ADD_TEAMS':
			return [...state, ...action.teams];
			
		default:
			return state
	}
}

	

export default teams;