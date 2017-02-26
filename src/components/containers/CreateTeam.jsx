import AddTeam from '../ui/AddTeam.jsx';
import { connect } from 'react-redux';
import { fetchTeam } from '../../actions/'


const mapDispatchToProps = (dispatch) => {
	return {
		handleSubmit: (e, name) => {
			e.preventDefault();
			dispatch(fetchTeam(name));
		}
	}
}


const CreateTeam = connect(null, mapDispatchToProps)(AddTeam);

export default CreateTeam;