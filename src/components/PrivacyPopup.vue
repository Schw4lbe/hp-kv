<template>
  <div
    v-if="popupVissible === true"
    class="privacy-popup-container bgBlur"
    id="privacy-popup-container"
  >
    <div class="privacy-popup popup-slide-in-left" id="privacy-popup">
      <div class="privacy-popup-content">
        <div class="privacy-popup-header-container">
          <h3 class="privacy-popup-header popup-header">{{ header }}</h3>
          <img class="privacy-popup-icon" :src="icon" alt="Cookie Icon" />
        </div>

        <p class="privacy-popup-description">
          Diese Homepage kommt ohne <strong>Tracking Cookies</strong> und
          <strong>Analysetools</strong> von Drittanbietern aus.
        </p>
        <p class="privacy-popup-description">
          Weitere Informationen unter
          <router-link class="description-link" to="/privacy"
            >Datenschutz</router-link
          >
        </p>
        <button @click="closePopup" class="privacy-accept-btn">
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import popupIcon from "../../public/img/icons/cookie-bite.svg";
import data from "../../public/content.json";

export default {
  name: "PrivacyPopup",

  data() {
    return {
      popupVissible: false,
      icon: popupIcon,
      header: data.popups.privacy.header,
      button: data.popups.privacy.button,
    };
  },

  computed: {
    ...mapGetters(["getPrivacyPopupStatus"]),
  },

  created() {
    this.checkLocalStorage(this.getPrivacyPopupStatus);
  },

  methods: {
    ...mapMutations(["setPrivacyPopupStatus"]),

    checkLocalStorage(bool) {
      if (bool === true) {
        return;
      } else {
        this.showPopup();
      }
    },

    showPopup() {
      setTimeout(() => {
        this.popupVissible = true;
        setTimeout(() => {
          document.body.classList.add("scroll-disabled");
        }, 500);
      }, 2000);
    },

    closePopup() {
      this.setPrivacyPopupStatus(true);
      document.body.classList.remove("scroll-disabled");
      const container = document.querySelector("#privacy-popup-container");
      const popup = document.querySelector("#privacy-popup");
      container.classList.remove("bgBlur");
      container.classList.add("bgBlurReverse");
      popup.classList.remove("popup-slide-in-left");
      popup.classList.add("popup-slide-out-left");

      setTimeout(() => {
        this.popupVissible = false;
      }, 500);
    },
  },
};
</script>
