import React from 'react';
import ExPreview from './ExPreview';

const ExerciseIndex = React.createClass({
	render() {
		return (
			<div className="exercise-index">
				{this.props.posts.map((post, i) => <ExPreview {...this.props} key={i} i={i} post={post} /> )}
			</div>
		)
	}
});

export default ExerciseIndex;