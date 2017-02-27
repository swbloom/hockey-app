import React from 'react';

class Player extends React.Component {
	render() {
		return (
			<div className="player">
				<h2>{this.props.player.name} (#{this.props.player.number})</h2>
			</div>
		)
	}
	componentDidMount() {
		this.props.getPlayer(this.props.params.playerId);
	}
}

module.exports = Player;