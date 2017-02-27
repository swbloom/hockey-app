import React from 'react';


class AddTeam extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			city: '',
			arena: '',
			conference: '',
			division: '',
			players: []
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e, field) {
		const team = Object.assign({}, this.state);
		team[field] = e.target.value;
		this.setState(team);
	}
	render() {
		return (
			<div>
				<h1>Add a Team</h1>
				<form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
						<div>
							<label htmlFor="name">Team Name</label>
							<input onChange={(e) => this.handleChange(e, "name")} value={this.state.name} id="name" />
						</div>
						<div>
							<label htmlFor="city">City</label>
							<input id="city" onChange={(e) => this.handleChange(e, "city")} value={this.state.city} />
						</div>
						<div>
							<label htmlFor="arena">Arena</label>
							<input id="arena" onChange={(e) => this.handleChange(e, "arena")} value={this.state.arena} />
						</div>
						<div>
							<label htmlFor="conference">Conference</label>
							<select value={this.state.conference} onChange={(e) => this.handleChange(e, "conference")}>
								 <option value="" disabled>Choose conference</option>
								{this.props.conferences.map((conference) => {
									return (
										<option value={conference._id} key={conference._id}>{conference.name}</option>
									)
								})}
							</select>
						</div>
						<div>
							<label htmlFor="division">Division</label>
							<select value={this.state.division} onChange={(e) => this.handleChange(e, "division")}>
							 	<option value="" disabled>Choose division</option>
								{this.props.conferences.map((conference) => {
									return conference.divisions.map((division) => {
										return (
											<option key={division._id} value={division._id}>{division.name}</option>
										)
									});
								})}
							</select>
						</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}

	componentDidMount() {
		this.props.getConferences();
	}

}

export default AddTeam;