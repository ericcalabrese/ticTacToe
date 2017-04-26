import React, { Component } from 'react';
import './TicTacToe.css';

export default class Board extends Component {

	render () {
		return (
			<div>
		        <div className="board">
		        {this.props.board.map((cell, index) => {
		           	return <div key={index} onClick={() => this.props.handle(index)} className="square">{cell}</div>
		           	})
	            }
	        	</div>
		        }        	
		    </div>
		)
	}
}