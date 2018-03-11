import { actionTypes } from '../_constants';

export const isDoChallengeModalVisible = (store = false, action) => {
  switch (action.type) {
    case actionTypes.SET_DO_CHALLENGE_MODAL_VISIBLE: {
      return action.isDoChallengeModalVisible;
    }
    default: {
      return store;
    }
  }
}
