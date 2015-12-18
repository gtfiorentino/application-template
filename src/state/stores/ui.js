import * as actionTypes from 'state/constants';

const initialState = {
  sunkenViewPort: true
};

export default function ui(state = initialState, action = {}) {
  const { type, data } = action;

  switch (type) {
    case actionTypes.ERROR:
      return {
        ...data.error
      };

    default:
      return state;

  }
}