import { actionTypes } from '../_constants';

export const text = (state = false, action) => {
  switch (action.type) {
    case actionTypes.TEXT_ACTION: {
      return true;
    }
    default: {
      return state;
    }
  }
};

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOGGEDIN: {
      return action.isLoggedIn;
    }
    default: {
      return state;
    }
  }
};

export const invitationCode = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_INVITATION_CODE: {
      return action.code;
    }
    default: {
      return state;
    }
  }
};
