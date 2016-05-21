import React from 'react';

const Ex2Study = React.createClass({
	render() {	
		const { study, i } = this.props;
		return (
			<div className="study">
				<p>Ex 2 Study</p>
				{study.colors.map((color, i) => <p key={i}>{color}</p> )}
			</div>
		);
	}
});

export default Ex2Study;