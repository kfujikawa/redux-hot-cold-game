import React from 'react';
import { connect } from 'react-redux';

import Game from './game';
import GuessList from './guess-list';

export class GameContainer extends React.Component {
	constructor(props){
		super(props);
	}

	render (){
		return (
	        <div>
	            <Game />
	            <GuessList />
	        </div>
    	);
	}
}



const mapStateToProps = (state, props) => {
  return state;
};

export default connect(mapStateToProps)(GameContainer);