import React from 'react';
import { connect } from 'react-redux';

import { generateNumber } from '../actions';
import { postFewestGuesses } from '../actions';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.generateNumber = this.generateNumber.bind(this);
  }
  generateNumber() {
    this.props.dispatch(postFewestGuesses());
  }
  //   componentDidMount() {
  //     this.props.dispatch(generateNumber());
  //   }

  render() {
    console.log(this.props);
    return (
      <div className="number-list">
        <h1>Cool</h1>
        <button onClick={this.generateNumber}>Generate Random Number</button>
        {this.props.numbers}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(Game);
