import React from 'react';
import ExPreview from './ExPreview';

const ExerciseIndex = React.createClass({
	render() {
		return (
			<div className="exercise-index">
				<header>
					<h1>Albers 2016</h1>
				</header>
				{this.props.exercises.map((exercise, i) => <ExPreview {...this.props} key={i} i={i} exercise={exercise} /> )}
			</div>
		)
	}
});

export default ExerciseIndex;