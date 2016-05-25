import React from 'react';
import { Link } from 'react-router';

import Study from './Study';

const ExPreview = React.createClass({
	render() {
		const {exercise, i} = this.props;
		const study = exercise.studies[0];
		const exId = exercise.id;
		return (
			<Link to={`/exercise/${exercise.id}`} className="exercise-preview study-wrapper">
				<Study key={i} i={i} exId={exId} study={study} {...this.props} />
				<p className="exercise-tag">Exercise {exercise.id}</p>
				<h2 className="exercise-title">{exercise.title}</h2>
			</Link>
		)
	}
});

export default ExPreview;