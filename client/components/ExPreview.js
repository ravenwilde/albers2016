import React from 'react';
import { Link } from 'react-router';

import Study from './Study';

const ExPreview = React.createClass({
	render() {
		const {exercise, i} = this.props;
		const study = exercise.studies[0];
		const exId = exercise.id;
		return (
			<Link to={`/exercise/${exercise.id}`}>
				<div className="exercise-preview">
					<div className="exercise-preview-study">
						<Study key={i} i={i} exId={exId} study={study} {...this.props} />
					</div>
					<p>Exercise {exercise.id}: {exercise.title}</p>
				</div>
			</Link>
		)
	}
});

export default ExPreview;