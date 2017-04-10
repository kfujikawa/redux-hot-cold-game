import React from 'react';
import { connect } from 'react-redux';

// import * as actions from '../actions.index';

export default class Game extends React.Component {
	constructor (props) {
		super(props);
		// this.userGuess = this.userGuess.bind(this);
	}

    // userGuess(guess) {
        // dispatch the GUESS_NUMBER action
        // this.props.dispatch(
        //     actions.guessNumber(this.props.guess)
        // );    }

	render(){
		return (
			<div className="guess">
				<h1>Hello World!</h1>
			</div>
		)
	}
}