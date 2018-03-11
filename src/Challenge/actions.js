import { actionTypes } from '../_constants';

export function setDoChallengeModalVisible(isDoChallengeModalVisible) {
  return {
    type: actionTypes.SET_DO_CHALLENGE_MODAL_VISIBLE,
    isDoChallengeModalVisible,
  };
}
