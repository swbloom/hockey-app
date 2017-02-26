import Teams from '../ui/Teams.jsx'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
	return {
		teams: state.teams
	}
}

const TeamsContainer = connect(mapStateToProps)(Teams);

export default TeamsContainer;
