import React from 'react';
import { render } from 'react-dom';
import { IndexRedirect, Route } from 'react-router';
import { Provider } from 'react-redux';
import _ from 'lodash';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'state/stores';
import createHistory from 'history/lib/createBrowserHistory';
import routeTriggerMiddleware from 'middleware/routeTriggerMiddleware.js';
require('./index.scss');

const store = compose(
  applyMiddleware(thunkMiddleware, routeTriggerMiddleware),
  reduxReactRouter({
    history: createHistory()
  })
)(createStore)(rootReducer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('state/stores', () => {
    const nextRootReducer = require('state/stores');
    store.replaceReducer(nextRootReducer);
  });
}

import Root from 'views/';
import routes from './routes.js';
const generateRoutes = () => {
  return [
    <IndexRedirect key={'default-route'} to={_.filter(routes, d => d.default)[0].route}/>
  ].concat(_.map(routes, d => {
    // otherwise initialize all our other routes from the routes.js config file
    return <Route key={d.route} path={d.route} component={d.component}/>;
  }));
};

render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" name="Root" component={Root}>
        {generateRoutes()}
      </Route>
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);