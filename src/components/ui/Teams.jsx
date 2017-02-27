import React from 'react';
import { Link } from 'react-router';

class Teams extends React.Component {
	render() {
		return (
			<div>
				<h2>Teams</h2>
				<ul>
					{this.props.teams.map((team,i) => 
						<li key={`${team._id}`}>
							<Link to={`/teams/${team._id}`}>{team.name}</Link>
						</li>)
					}
				</ul>
			</div>)
	}
	componentDidMount() {
		this.props.getTeams();
	}
}

export default Teams;

