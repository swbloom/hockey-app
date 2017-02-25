import React from 'react';
import Teams from '../ui/Teams.jsx'


class TeamsContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			teams: []
		}
	}
	render() {
		return (
			<Teams />
		)
	}
	componentDidMount() {
		fetch('http://localhost:8080/api/teams', { 
			mode: 'no-cors',
		    headers: {
	        	"Content-Type": "application/json",
	        	"Accept": "application/json"
            }
		})
			.then((response) => response.json())
			.then((json) => console.log(`${json}`))
			.catch((err) => console.log(err));
	}
}

export default TeamsContainer;