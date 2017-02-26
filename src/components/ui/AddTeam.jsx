import React from 'react';

class AddTeam extends React.Component {
	constructor() {
		super();
		this.state = {
			teamName: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({teamName: e.target.value});
	}
	render() {
		return (
			<div>
				<form onSubmit={(e) => this.props.handleSubmit(e, this.state.teamName)}>
					<input onChange={(e) => this.handleChange(e)} value={this.state.teamName} />
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default AddTeam;