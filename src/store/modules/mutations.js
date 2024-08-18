export default {
  setPrivacyPopupStatus(state, bool) {
    state.privacyPopupStatus = bool;
    localStorage.setItem("privacyPopupStatus", bool);
  },

  setUserVerified(state, bool) {
    state.userVerified = bool;
    localStorage.setItem("userVerified", bool);
  },

  resetPrivacyPopupStatus(state, bool) {
    state.privacyPopupStatus = bool;
    localStorage.setItem("privacyPopupStatus", bool);
  },

  resetUserVerified(state, bool) {
    state.userVerified = bool;
    localStorage.setItem("userVerified", bool);
  },
};
