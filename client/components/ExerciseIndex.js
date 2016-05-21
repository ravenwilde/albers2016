import React from 'react';
import ExPreview from './ExPreview';

const ExerciseIndex = React.createClass({
	render() {
		return (
			<div className="exercise-index">
				{this.props.exercises.map((exercise, i) => <ExPreview {...this.props} key={i} i={i} exercise={exercise} /> )}
			</div>
		)
	}
});

export default ExerciseIndex;