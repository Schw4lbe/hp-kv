export default {
  privacyPopupStatus:
    localStorage.getItem("privacyPopupStatus") === "true" ? true : false,

  userVerified: localStorage.getItem("userVerified") === "true" ? true : false,
};
