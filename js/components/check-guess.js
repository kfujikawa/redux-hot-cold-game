import React from 'react';
import { connect } from 'react-redux';

import { winningGuess, guessNumber } from '../actions';

export class CheckGuess extends React.Component {
  constructor(props) {
    super(props);
  }

  winningGuess(props){
    if(this.props.numbers[this.props.numbers.length - 1] === this.props.win){
      console.log("winning guess running");
      this.props.dispatch(actions.winningGuess())
    }
  }

  render() {
    return (
      <div>
        <p>You win!  Correct guess was:  </p>
        <p>{this.props.numbers[this.props.numbers.length - 1]}</p>
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(CheckGuess);