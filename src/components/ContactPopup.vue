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
          {{ item }}
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
import data from "../assets/data/content.json";

export default {
  name: "ContactPopup",

  data() {
    return {
      popupVissible: false,
      texts: data.popups.contact.content,
      button1: data.popups.contact.button1,
      button2: data.popups.contact.button2,
    };
  },

  created() {
    setTimeout(() => {
      this.showPopup();
    }, 10000);
  },

  methods: {
    showPopup() {
      this.popupVissible = true;
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
