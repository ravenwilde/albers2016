import React from 'react';
import Ex1Study from './Studies/Ex1Study';
import Ex2Study from './Studies/Ex2Study';

const Study = React.createClass({
	render() {	
		const { study, exId, i } = this.props;
		switch(exId) {
			case '1':
				return (
					<div className="study-container">
						<Ex1Study key={i} i={i} study={study} {...this.props} />
					</div>
				);
			case '2':
				return (
					<div className="study-container">
						<Ex2Study key={i} i={i} study={study} {...this.props} />
					</div>
				);
			default:
				return (
					<div className="study-container">
						<p>No Study</p>
					</div>
				);
		}
	}
});

export default Study;