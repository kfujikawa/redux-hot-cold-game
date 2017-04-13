import React from 'react';
import { connect } from 'react-redux';

import Game from './game';
import GuessList from './guess-list';
import CheckGuess from './check-guess';

export class GameContainer extends React.Component {
	constructor(props){
		super(props);
	}

	render (){
		return (
	        <div>
	            <Game />
	            <GuessList />
	            <CheckGuess />
	        </div>
    	);
	}
}



const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(GameContainer);