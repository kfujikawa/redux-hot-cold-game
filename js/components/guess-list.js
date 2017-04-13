import React from 'react';
import { connect } from 'react-redux';

import { generateNumber, guessNumber } from '../actions';
import { postFewestGuesses } from '../actions';

export class GuessList extends React.Component {
  constructor(props) {
    super(props);
    // this.guessNumber = this.guessNumber.bind(this);
  }

    render(){
        const numbers = props.numbers.map(function(number, index) {
            return (
                <li key={index}>
                    {number}
                </li>
            );
        });

        return (
            <ul id="guessList">
                {numbers}
            </ul>
        );
    }
}


const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(GuessList);