import React from 'react';
import { connect } from 'react-redux';

import { generateNumber, guessNumber } from '../actions';
import { postFewestGuesses } from '../actions';

import GuessList from './guess-list';
import CheckGuess from './check-guess';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.guessNumber = this.guessNumber.bind(this);
  }

  guessNumber() {
    this.props.dispatch(guessNumber(parseInt(this.userGuessInput.value)));
    this.forceUpdate();
  }

  componentDidMount() {
    this.props.dispatch(generateNumber());
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <h1>Hot Cold Number Game</h1>
            <h2>{this.guessNumber}</h2>
            <label>Guess: </label>
            <input type="text" ref={ref => this.userGuessInput = ref} />
            <button type="button" onClick={this.guessNumber}>
              Submit Guess
            </button>
          </div>
        </form>
        <h3>This is the winning number: {this.props.win}</h3>

        <GuessList />
        <CheckGuess
          temperature={Math.abs(
            Math.floor(
              this.props.win - this.props.numbers[this.props.numbers.length - 1]
            )
          )}
        />

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(Game);
