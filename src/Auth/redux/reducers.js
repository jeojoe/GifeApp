import * as types from '../../_constants/actionTypes';

export const text = (state = false, action) => {
  switch (action.type) {
    case types.TEXT_ACTION: {
      return true;
    }
    default: {
      return state;
    }
  }
};

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case types.SET_IS_LOGGEDIN: {
      return action.isLoggedIn;
    }
    default: {
      return state;
    }
  }
};

export const isInvited = (state = false, action) => {
  switch (action.type) {
    case types.SET_IS_INVITED: {
      return action.isInvited;
    }
    default: {
      return state;
    }
  }
};
