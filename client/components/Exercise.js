import React from 'react';
import Study from './Study';

const Exercise = React.createClass({
	render() {
		const {exId} = this.props.params;
		const i = this.props.exercises.findIndex((exercise) => exercise.id === exId);
		const exercise = this.props.exercises[i];

		return (
			<div className="exercise">
				<h2>{ exercise.header }</h2>
				<p>{ exercise.objective }</p>
				<p>{ exercise.notes }</p>
				{exercise.studies.map((study, i) => <Study {...this.props} key={i} i={i} exId={exId} study={study} /> )}
			</div>
		)
	}
});

export default Exercise;