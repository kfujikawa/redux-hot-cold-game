import React from 'react';
import { connect } from 'react-redux';

import { generateNumber, guessNumber } from '../actions';
import { postFewestGuesses } from '../actions';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.guessNumber = this.guessNumber.bind(this);
  }

  // guessNumber() {
  //   this.props.dispatch(postFewestGuesses());
  // }

  guessNumber(){
    // const userGuess = this.userGuessInput.value;
    this.props.dispatch(guessNumber(this.userGuessInput.value));
  }

    componentDidMount() {
      this.props.dispatch(generateNumber());
    }

  render() {
    console.log(this.props);

    // const numbers = this.props.numbers.map(number => {
    //     return <Numbers number={number} key={number} />;
    // });

    return (
        <form>
          <div>
            <h1>Hot Cold Number Game</h1>
            <label>Guess:  </label>
            <input type="text" ref={ref => this.userGuessInput = ref} />
            <button type="button" onClick={this.guessNumber}>Submit Guess</button>
            <h3>This is the winning number: {this.props.win}</h3>
          </div>
        </form>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(Game);
