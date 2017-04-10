import * as actions from './actions/index';
import * as reducers from './reducers/index';
import store from './store';

store.subscribe(() => {
  console.log("store changed (user guess updated)");
  console.log(store.getState());
});

store.dispatch(actions.generateNumber(5));
store.dispatch(actions.guessNumber(3));
store.dispatch(actions.guessNumber(55));

store.dispatch(actions.guessNumber(11));
store.dispatch(actions.guessNumber(11));
store.dispatch(actions.compareGuess());