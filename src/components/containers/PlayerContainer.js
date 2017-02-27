import Player from '../ui/Player.jsx'
import { connect } from 'react-redux'
import { getPlayer } from '../../actions/';


const mapDispatchToProps = (dispatch) => {
	return {
		getPlayer: (playerId) => {
			dispatch(getPlayer(playerId));
		}
	}
}

const mapStateToProps = (state) => {
	return {
		player: state.player
	}
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);

module.exports = PlayerContainer;
