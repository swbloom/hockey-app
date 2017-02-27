import Players from '../ui/Players.jsx';
import { connect } from 'react-redux';
import { getPlayers} from '../../actions/';

const mapDispatchToProps = (dispatch) => {
	return {
		getPlayers: () => {
			dispatch(getPlayers());
		}
	}
}

const mapStateToProps = (state) => {
	return {
		players: state.players
	}
}

const PlayersContainer = connect(mapStateToProps, mapDispatchToProps)(Players);

export default PlayersContainer;
