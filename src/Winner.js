import React, { Component } from 'react';
import './Winner.css';


export default class Winner extends Component {


	render () {
		return (
			<div className="frame">
				    <h1>{`${this.props.winner} Wins!`}</h1>
			        <h1>Dick</h1>
				    <div className="button">
				    	<button className="button btn btn-primary btn-lg" type="submit" onClick={this.reset}>Play Again</button>
				    </div>
		    </div>
		)
	}
}