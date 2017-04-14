import * as actions from '../actions';

export const guessReducer = (state = { numbers: [] }, action) => {
  switch (action.type) {
    case actions.GENERATE_NUMBER:
      return Object.assign({}, state, {
        win: Math.round(Math.random() * 100)
      });

    case actions.GUESS_NUMBER:
      return Object.assign({}, state, {
        numbers: [...state.numbers, action.number]
      });

    default:
      return state;

  }
};