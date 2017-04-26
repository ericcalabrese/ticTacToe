import React, { Component } from 'react';
import './Winner.css';

export default class Winner extends Component {

	render () {
		return (
		<div>
			<div className="frame">
				<div id="text">
				    <h1>{`${this.props.winner} Wins!`}</h1>
				    <div className="playAgain">
				    	<button className="" type="submit" onClick={this.props.reset}>Play Again</button>
				    </div>
				</div>				
		    </div>
		    <footer>
		        <div>
		   	    	<p>Copyright &copy; Eric Calabrese 2017</p>
		        </div>
	        </footer>
	    </div>
		)
	}
}