const ENDPOINT = 'http://localhost:8080/api';

const displayConferences = (conferences) => {
	return {
		type: 'DISPLAY_CONFERENCES',
		conferences
	}
}

export const getConferences = () => {
	return (dispatch) => {
		fetch(`${ENDPOINT}/conferences`)
		.then((response) => response.json())
		.then((conferences) => dispatch(displayConferences(conferences)))
		.catch((err) => console.log(err))
	}
}

const displayPlayer = (player) => {
	return {
		type: 'DISPLAY_PLAYER',
		player
	}
}

export const getPlayer = (playerId) => {
	return (dispatch) => {
		fetch(`${ENDPOINT}/players/${playerId}`)
		.then((response) => response.json())
		.then((player) => dispatch(displayPlayer(player)))
		.catch((err) => console.log(err));
	}
}

const displayPlayers = (players) => {
	return {
		type: 'DISPLAY_PLAYERS',
		players
	}
}

export const getPlayers = () => {
	return (dispatch) => {
		fetch(`${ENDPOINT}/players`)
		.then((response) => response.json())
		.then((players) => dispatch(displayPlayers(players)))
		.catch((err) => console.log(err));
	}
}


const displayTeams = (teams) => {
	return {
		type: 'DISPLAY_TEAMS',
		teams
	}
}

export const getTeams = () => {
	return (dispatch) => {
		fetch(`${ENDPOINT}/teams`, { 
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
		}
	})
	.then((response) => response.json())
	.then((teams) => dispatch(displayTeams(teams)))
	.catch((err) => console.log(err));
	}
}


const addTeam = (team) => {
    return {
        type: 'ADD_TEAM',
        name: team.name,
        _id: team._id,
        arena: team.arena,
        city: team.city,
        conference: team.conference,
        division: team.division
    };
}

export const postTeam = (team) => {
	return (dispatch) => {
		return fetch(`${ENDPOINT}/teams`, 
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

const displayTeam = (team) => {
	return {
		type: 'DISPLAY_TEAM',
		team
	}
}

export const getTeam = (teamID) => {
	return (dispatch) => {
		fetch(`${ENDPOINT}/teams/${teamID}`, {
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			}
		})
		.then((response) => response.json())
		.then((team) => dispatch(displayTeam(team)))
		.catch((err) => console.log(err))
	}
}