import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'state/actions';
import routes from '../routes.js';
import _ from 'lodash';

import {
  HeaderBar,
  ViewPort,
  SideBar,
  MenuGroup,
  MenuItem
} from 'components/application';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(actions.applicationLoaded());
  }

  renderRoute(route) {
    return (
      <MenuItem key={route.name}
                label={route.name}
                linkTo={route.route}
                icon={route.icon}
      />
    );
  }

  render() {
    const { children, app } = this.props;
    const { sunkenViewPort } = app.ui;

    return (
      <div>
        <HeaderBar title="Application Starter"/>
        <SideBar>
          <MenuGroup label="First Group">
            {_.map(routes, this.renderRoute.bind(this))}
          </MenuGroup>
        </SideBar>
        <ViewPort sunken={sunkenViewPort}>
          {children}
        </ViewPort>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  dispatch: React.PropTypes.func,
  app     : React.PropTypes.object
};

export default connect(state => state)(App);