import React from 'react';

const Ex1Study = React.createClass({
	render() {	
		return (
			<div className="study">
				<p>This is a study for Exercise {this.props.exercise.id}</p>
			</div>
		)
	}
});

export default Ex1Study;