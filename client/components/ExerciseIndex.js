import React from 'react';
import ExPreview from './ExPreview';

const ExerciseIndex = React.createClass({
	render() {
		return (
			<div className="exercise-index">
				<header>
					<h1>Albers 2016</h1>
				</header>
				<div className="body-text">
					<p>Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
					<p>Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.</p>
				</div>
				<div className="exercise-list-container">
					<div className="exercise-list">
						{this.props.exercises.map((exercise, i) => <ExPreview {...this.props} key={i} i={i} exercise={exercise} /> )}
					</div>
				</div>
			</div>
		)
	}
});

export default ExerciseIndex;