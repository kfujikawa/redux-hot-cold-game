import * as actions from '../actions/index';

export const guessReducer = (state = {
	numbers: []
}, action) => {

	switch (action.type) {

		case actions.GENERATE_NUMBER:
			return Object.assign({}, state, {
				numbers: [action.number]
			});

		case actions.GUESS_NUMBER:

			for (var i = 0; i < state.numbers.length; i++) {
				if (action.guess === state.numbers[i]) {
					console.log('You already guessed that');
					return;
				}
			}

			return Object.assign({}, state, {
				numbers: [...state.numbers, action.guess]
			});

		case actions.COMPARE_GUESS:
			if (state.numbers[0] === state.numbers[state.numbers.length - 1]) {
				console.log('You guessed right!');
				return state.numbers[0];
			}

		default:
			return state;

	}
};