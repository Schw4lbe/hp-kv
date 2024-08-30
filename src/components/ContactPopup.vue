<template>
  <div
    v-if="popupVissible === true"
    class="contact-popup-container"
    id="contact-popup-container"
  >
    <div class="contact-popup popup-slide-in-bottom" id="contact-popup">
      <div class="contact-popup-content">
        <p
          v-for="(item, index) in texts"
          :key="index"
          class="contact-popup-description"
        >
          {{ item.text }}
        </p>
        <div class="contact-popup-btn-container">
          <button @click="visitContactSection" class="contact-btn">
            {{ button1 }}
          </button>
          <button @click="closePopup" class="close-btn">{{ button2 }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../public/content.json";

export default {
  name: "ContactPopup",

  data() {
    return {
      popupVissible: false,
      texts: data.popupContact[0].content,
      button1: data.popupContact[0].button1,
      button2: data.popupContact[0].button2,
    };
  },

  computed: {
    privacyPopupStatus() {
      return this.$store.state.privacyPopupStatus;
    },
  },

  watch: {
    privacyPopupStatus(newValue) {
      if (newValue === true) {
        this.showPopup();
      }
    },
  },

  methods: {
    showPopup() {
      setTimeout(() => {
        this.popupVissible = true;
      }, 10000);
    },

    closePopup() {
      const popup = document.querySelector("#contact-popup");
      popup.classList.remove("popup-slide-in-bottom");
      popup.classList.add("popup-slide-out-bottom");

      setTimeout(() => {
        this.popupVissible = false;
      }, 500);
    },

    visitContactSection() {
      this.closePopup();
      setTimeout(() => {
        const section = document.querySelector("#section4");
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 700);
    },
  },
};
</script>
