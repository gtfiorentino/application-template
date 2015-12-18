import { pushState } from 'redux-router';

const routeTriggerMiddleware = store => next => action => {
  if (action.redirect) {
    store.dispatch(pushState(null, `/${action.redirect}`));
  }

  return next(action);
};

export default routeTriggerMiddleware;