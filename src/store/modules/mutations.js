export default {
  setPrivacyPopupStatus(state, bool) {
    state.privacyPopupStatus = bool;
    localStorage.setItem("privacyPopupStatus", bool);
  },

  resetPrivacyPopupStatus(state, bool) {
    state.privacyPopupStatus = bool;
    localStorage.setItem("privacyPopupStatus", bool);
  },
};
