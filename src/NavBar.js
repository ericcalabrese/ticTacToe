import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {

	render () {
		return (
			<nav className="nav">
			    <h2 id="title">Tic Tac Toe</h2>
			    <h5 id="title2">Made in React.js</h5>
			</nav>
		)
	}
}