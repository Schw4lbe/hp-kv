<template>
  <div
    v-if="popupVissible === true"
    class="privacy-popup-container bgBlur"
    id="privacy-popup-container"
  >
    <div class="privacy-popup popup-slide-in-left" id="privacy-popup">
      <div class="privacy-popup-content">
        <h3 class="privacy-popup-header">dummy privacy popup header</h3>
        <p class="privacy-popup-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit incidunt
          cupiditate laudantium, atque debitis consequuntur velit, at
          repellendus architecto in sequi pariatur culpa autem modi commodi
          sapiente optio quos voluptates!
        </p>
        <button @click="closePopup" class="privacy-accept-btn">
          Los gehts!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPopup",

  data() {
    return {
      popupVissible: false,
    };
  },

  created() {
    setTimeout(() => {
      this.showPopup();
    }, 1000);
  },

  methods: {
    showPopup() {
      this.popupVissible = true;
      setTimeout(() => {
        document.body.classList.add("scroll-disabled");
      }, 500);
    },

    closePopup() {
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
