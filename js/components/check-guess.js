import React from 'react';
import { connect } from 'react-redux';

import { winningGuess, guessNumber } from '../actions';

export class CheckGuess extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }

  validate() {
    if (this.props.temperature === 0) {
      return 'You guessed right...';
    }

    if (this.props.temperature < 10) {
      return 'Warm...';
    }

    if (this.props.temperature > 15) {
      return 'Cold...';
    }
  }

  render() {
    return (
      <div>
        <h1>{this.validate()}</h1>
        <p>{this.props.numbers[this.props.numbers.length - 1]}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(CheckGuess);
