import Teams from '../ui/Teams.jsx'
import { connect } from 'react-redux'
import { getTeams } from '../../actions';

const mapStateToProps = (state) => {
	return {
		teams: state.teams
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTeams: () => {
			dispatch(getTeams());	
		} 
	}
}

const TeamsContainer = connect(mapStateToProps, mapDispatchToProps)(Teams);

export default TeamsContainer;
