import * as actions from 'state/constants';

export const applicationLoaded = () => dispatch => {
  dispatch({
    type: actions.APPLICATION_LOADED
  });
};