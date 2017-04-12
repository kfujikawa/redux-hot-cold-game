import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { guessReducer } from './reducers/index';

const store = createStore(guessReducer, applyMiddleware(thunk));

export default store;
