import {createStore} from 'redux';

import { guessReducer } from './reducers/index';

const store = createStore(guessReducer);

export default store;