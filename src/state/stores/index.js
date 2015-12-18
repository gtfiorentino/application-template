import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import ui from './ui.js';

const rootReducer = combineReducers({
  router: routerStateReducer,
  app   : combineReducers({
    ui
  })
});

export default rootReducer;