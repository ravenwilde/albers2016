import React from 'react';
import Exercise from './Exercise';

const ExerciseIndex = React.createClass({
	render() {
		return (
			<div className="exercise-index">
				{this.props.exercises.map((exercise, i) => <Exercise {...this.props} key={i} i={i} exercise={exercise} /> )}
			</div>
		)
	}
});

export default ExerciseIndex;