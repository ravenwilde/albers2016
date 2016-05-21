import React from 'react';
import { Link } from 'react-router';
import Study from './Study';

const Exercise = React.createClass({
	render() {
		const {exId} = this.props.params;
		const i = this.props.exercises.findIndex((exercise) => exercise.id === exId);
		const exercise = this.props.exercises[i];

		return (
			<div className="exercise">
				<nav>
					<Link to="/">&lsaquo; Albers 2016</Link>
				</nav>
				<header>
					<p className="exercise-tag">Exercise { exercise.id }</p>
					<h1>{ exercise.header }</h1>
				</header>
				<div className="body-text">
					<p>{ exercise.objective }</p>
					<p>{ exercise.notes }</p>
				</div>
				<div className="studies-list">
					{exercise.studies.map((study, i) => <Study {...this.props} key={i} i={i} exId={exId} study={study} /> )}
				</div>
			</div>
		)
	}
});

export default Exercise;