import React from 'react';
import { Link } from 'react-router';

class Team extends React.Component {
	render() {
		return (
			<div className="team">
				<h2>{this.props.team.name}</h2>
				<ul className="players">
					{this.props.team.players && this.props.team.players.map((player) => 
						<li key={`player-${player._id}`}>
							<Link to={`/players/${player._id}`}>{player.name}</Link>
						</li>)}
				</ul>
			</div>
		)
	}
	componentDidMount() {
		this.props.getTeam(this.props.params.teamId);
	}
}

module.exports = Team;