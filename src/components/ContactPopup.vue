<template>
  <div
    v-if="popupVissible === true"
    class="contact-popup-container bgBlur"
    id="contact-popup-container"
  >
    <div class="contact-popup popup-slide-in" id="contact-popup">
      <button @click="closePopup" class="close-popup">close</button>
      <div class="contact-popup-content">
        <h3 class="contact-popup-header">dummy popup header</h3>
        <p class="contact-popup-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit incidunt
          cupiditate laudantium, atque debitis consequuntur velit, at
          repellendus architecto in sequi pariatur culpa autem modi commodi
          sapiente optio quos voluptates!
        </p>
        <button @click="visitContactSection" class="contact-btn">
          go to contact
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPopup",

  data() {
    return {
      popupVissible: false,
    };
  },

  created() {
    setTimeout(() => {
      this.showPopup();
    }, 2000);
  },

  methods: {
    showPopup() {
      this.popupVissible = true;
    },

    closePopup() {
      const container = document.querySelector("#contact-popup-container");
      const popup = document.querySelector("#contact-popup");
      container.classList.remove("bgBlur");
      container.classList.add("bgBlurReverse");
      popup.classList.remove("popup-slide-in");
      popup.classList.add("popup-slide-out");

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
