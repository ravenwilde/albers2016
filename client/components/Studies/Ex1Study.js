import React from 'react';
import Dimensions from 'react-dimensions'

const Ex1Study = React.createClass({
	options: {elementResize : true},
	rtrnCalc: function(measure, divisor, multiplier) {
	    if (measure === 'width') {
	      var val = (this.props.containerWidth / divisor) * multiplier;
	      return val;
	    } else if ( measure === 'height') {
	      var val = (this.props.containerHeight / divisor) * multiplier;
	      return val;
	    }
	},
	paint: function() {
		const elementID = 'Ex1Study_'+ this.props.i;
		const colors = this.props.study.colors;
		
		var c = document.getElementById(elementID);
		var ct = c.getContext('2d');
        ct.canvas.width = this.props.containerWidth;
        ct.canvas.height = this.props.containerHeight;
        if (ct) {
			ct.clearRect(0,0,ct.canvas.width, ct.canvas.height);
			// background square 1
			ct.fillStyle = colors[0];
			this.props.containerHeight >= this.props.containerWidth ? ct.fillRect(0,0,this.rtrnCalc('width',1,1),this.rtrnCalc('height',2,1)) : ct.fillRect(0,0,this.rtrnCalc('width',2,1),this.rtrnCalc('height',1,1));
			//background square 2
			ct.fillStyle = colors[1];
			this.props.containerHeight >= this.props.containerWidth ? ct.fillRect(0,this.rtrnCalc('height',2,1),this.rtrnCalc('width',1,1),this.rtrnCalc('height',2,1)) : ct.fillRect(this.rtrnCalc('width',2,1),0,this.rtrnCalc('width',2,1),this.rtrnCalc('height',1,1));
			// foreground square 1
			ct.fillStyle = colors[2];
			this.props.containerHeight >= this.props.containerWidth ? ct.fillRect(this.rtrnCalc('width',8,1.5),this.rtrnCalc('height',8,1.5),this.rtrnCalc('width',8,5),this.rtrnCalc('height',8,1)) : ct.fillRect(this.rtrnCalc('width',8,1.5),this.rtrnCalc('height',8,1.5),this.rtrnCalc('width',8,1),this.rtrnCalc('height',8,5));
			this.props.containerHeight >= this.props.containerWidth ? ct.fillRect(this.rtrnCalc('width',8,1.5),this.rtrnCalc('height',8,5.5),this.rtrnCalc('width',8,5),this.rtrnCalc('height',8,1)) : ct.fillRect(this.rtrnCalc('width',8,5.5),this.rtrnCalc('height',8,1.5),this.rtrnCalc('width',8,1),this.rtrnCalc('height',8,5));
		}
	},
	componentDidMount: function() {
		this.paint();
	},
	componentDidUpdate: function() {
		this.paint();
	},
	render() {	
		const { study, i } = this.props;
		const elementID = 'Ex1Study_'+ i;
		return (
			<canvas id={elementID} width="100" height="100"
				containerWidth={this.props.containerWidth}
      			containerHeight={this.props.containerHeight}
			></canvas>
		);
	}
});

export default Dimensions()(Ex1Study);