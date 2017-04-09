import * as actions from './actions/index';
import * as reducers from './reducers/index';
import store from './store';

// Log the initial state
console.log("initial state (winning number)" + store.getState());

// Every time the state changes, log the change 
// store.subscribe(() => {
// 	console.log("store changed (user guess updated)", store.getState())
// })

// Dispatch actions 
store.dispatch(actions.guessNumber(100));
console.log("This is the store.getState value " + store.getState());

store.dispatch(actions.guessNumber(3));
console.log("This is the store.getState value " + store.getState());

// store.dispatch(actions.checkGuess(50);
