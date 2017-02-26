
function addTeams(teams) {
	return {
		type: 'ADD_TEAMS',
		teams
	}
}

function addTeam(team) {
    return {
        type: 'ADD_TEAM',
        name: team.name,
        _id: team._id
    };
}

export const getTeams = () => {
	return (dispatch) => {
		fetch('http://localhost:8080/api/teams', { 
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
		}
	})
	.then((response) => response.json())
	.then((teams) => dispatch(addTeams(teams)))
	.catch((err) => console.log(err));
	}
}

export const fetchTeam = (name) => {
	return (dispatch) => {
		const team = {
			name
		}
		return fetch('http://localhost:8080/api/teams', 
		{ 
		    headers: {
	        	"Content-Type": "application/json",
	        	"Accept": "application/json"
	        },
	        method: "POST",
	        body: JSON.stringify(team)
		})
		.then((response) => response.json())
		.then((team) => {
			dispatch(addTeam(team.doc))
		})
		.catch((err) => console.log(err));
	}
}