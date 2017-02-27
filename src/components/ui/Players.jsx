import React from 'react';
import { Link } from 'react-router';

class Players extends React.Component {
	render() {
		return (
			<div className="players">
				<ul>
					{this.props.players.map((player) => {
						return (
							<li key={`player-${player._id}`}>
							<Link to={`players/${player._id}`}>{player.name}</Link>
						</li>)
					})}
				</ul>
			</div>
		)
	}
	componentDidMount() {
		this.props.getPlayers();
	}
}

module.exports = Players;