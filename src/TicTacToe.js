import React, { Component } from 'react';
import './TicTacToe.css';

export default class TicTacToe extends Component {
	constructor(props) {
		super(props)
		this.state = {
			PLAYER_ONE_SYMBOL: "X",
			PLAYER_TWO_SYMBOL: "O",
			currentTurn: "X",
			board: [
				"", "", "", "", "", "", "", "", ""
			],
			winner: null,
			gameScreen: 'start',
			winnerXO: ""
		}

    this.reset = this.reset.bind(this);
	}

	handleClick(index) {
    if(this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner(),
        winnerXO: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_ONE_SYMBOL : this.state.PLAYER_TWO_SYMBOL,
        
      	})
      } 
	}

	checkForWinner() {
    var currentTurn = this.state.currentTurn
    
    var symbols = this.state.board
    
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })


  }
  reset() {
  	console.log("I just did a reset");
    this.setState({
      board: ["", "", "", "", "", "", "", "", ""],
      winner: null,
      winnerXO: ""
    })
  }

  render() {
  	switch(this.state.gameScreen) {
  		case 'start':
    		return (
		    	<div className="screen">
		        	{this.state.winner ? <h1>{`${this.state.winnerXO} Wins!`}</h1> : null}
		          <div className="board">
		            {this.state.board.map((cell, index) => {
		              return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>
		              })
		            }
		          </div>
		          <div className="button">
		            <button className="button btn btn-primary btn-lg" type="submit" onClick={this.reset}>Play Again</button>
		          </div>
		    	</div>
    		);
    	break;
    	case 'winner':
    		return(
    			<div className="screen">
		        	{this.state.winner ? <h1>{`${this.state.winnerXO} Wins!`}</h1> : null} 
		        </div>
    			);
    }
  }
}
