import React from 'react';

const Teams = (props) => {
	console.log(props.teams);
	return (
		<div>
			<h2>Teams</h2>
			<ul>
				{props.teams.map((team,i) => <li key={`${team._id}`}>{team.name}</li>)
				}
			</ul>
		</div>)
}

export default Teams;

