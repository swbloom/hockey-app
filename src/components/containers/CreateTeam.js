import AddTeam from '../ui/AddTeam.jsx';
import { connect } from 'react-redux';
import { postTeam, getConferences } from '../../actions/'


const mapStateToProps = (state) => {
	return {
		teams: state.teams,
		conferences: state.conferences
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (e, team) => {
			e.preventDefault();
			dispatch(postTeam(team));
		},
		getConferences: () => {
			dispatch(getConferences());
		}
	}
}


const CreateTeam = connect(mapStateToProps, mapDispatchToProps)(AddTeam);

export default CreateTeam;