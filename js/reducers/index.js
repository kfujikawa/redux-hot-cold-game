import * as actions from '../actions';

export const guessReducer = (state = { numbers: [] }, action) => {
  switch (action.type) {
    case actions.GENERATE_NUMBER:
      return Object.assign({}, state, {
        win: [Math.round(Math.random() * 100)]
      });

    case actions.GUESS_NUMBER:
      return Object.assign({}, state, {
        numbers: [...state.numbers, action.numbers]
      });

    // case actions.REPEAT_NUMBER:
    // 	for (var i = 1; i < state.numbers.length; i++) {
    // 		if (action.guess === state.win) {
    // 			console.log('You already guessed that');
    // 			return state;
    // 		}

    // 		else {
    // 			return state;
    // 		}
    // 	}

    case actions.WINNING_GUESS:
      if (state.win === state.numbers[state.numbers.length - 1]) {
        console.log('You guessed right!');
        return state;
      } else {
        return state;
      }

    case actions.HIGH_GUESS:
      if (state.win < state.numbers[state.numbers.length - 1]) {
        console.log('Too high!');
        return state;
      } else {
        return state;
      }

    case actions.LOW_GUESS:
      if (state.win > state.numbers[state.numbers.length - 1]) {
        console.log('Too low!');
        return state;
      } else {
        return state;
      }

    default:
      return state;

  }
};
