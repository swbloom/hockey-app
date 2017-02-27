import Team from '../ui/Team.jsx'
import { connect } from 'react-redux'
import { getTeam } from '../../actions/';


const mapDispatchToProps = (dispatch) => {
	return {
		getTeam: (teamId) => {
			dispatch(getTeam(teamId));
		}
	}
}

const mapStateToProps = (state) => {
	return {
		team: state.team
	}
}

const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(Team);

module.exports = TeamContainer;
