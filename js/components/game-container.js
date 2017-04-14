import React from 'react';
import { connect } from 'react-redux';

import Game from './game';

export class GameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(GameContainer);
