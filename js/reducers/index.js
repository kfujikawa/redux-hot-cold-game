import * as actions from '../actions/index';

// Initial state
const winningNumber = [getRandomInt(1, 100)];

export const guessReducer = (state=winningNumber, action) => {

	if(action.type === actions.GUESS_NUMBER) {
		console.log("guessReducer running");
		const guess = Object.assign({}, ...state, {guess: action.guess});
		console.log(guess);

		return [...state, action.guess];
	}

	else return state;

};

export const checkReducer = (state=store.getState, action) => {
	if(action.type === actions.CHECK_GUESS) {

		console.log("hi");

		// let lastGuess = (store.getState.length - 1);
		// console.log(lastGuess);

		// if(state === winningNumber){
		// 	console.log("You win!");
		// }

		// else if (state < winningNumber){
		// 	console.log("Too low!");
		// }

		// else if (state > winningNumber){
		// 	console.log("Too high!");
		// }

		// else return state;
	}

	else return state;
};

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}