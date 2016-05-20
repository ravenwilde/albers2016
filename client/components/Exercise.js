import React from 'react';
import Ex1Study from './Ex1Study';

const Exercise = React.createClass({
	render() {
		const { exId } = this.props.params;
		// index of exercise
		const i = this.props.exercises.findIndex((exercise) => exercise.id === exId);
		// get us the exercise
		const exercise = this.props.exercises[i];

		//const exerciseComments = this.props.comments[exId] || [];
		
		return (
			<div className="exercise">
				<Ex1Study i={i} exercise={exercise} {...this.props} />
			</div>
		)
	}
});

export default Exercise;