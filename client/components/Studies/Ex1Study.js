import React from 'react';

const Ex1Study = React.createClass({
	render() {	
		const { study, i } = this.props;
		return (
			<div className="study">
				<p>Ex 1 Study</p>
				{study.colors.map((color, i) => <p key={i}>{color}</p> )}
			</div>
		);
	}
});

export default Ex1Study;