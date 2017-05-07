import React, { Component } from 'react';
import './Winner.css';

export default class Draw extends Component {

	render () {
		return (
		<div>
			<div className="frame">
				<div id="draw">
				    <h1>Tie Game!</h1>
				    <div className="playAgain">
				    	<button className="" type="submit" onClick={this.props.reset}>Play Again</button>
				    </div>
				</div>				
		    </div>
	    </div>
		)
	}
}