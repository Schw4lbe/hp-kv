<template>
  <div
    v-if="popupVissible === true"
    class="contact-popup-container"
    id="contact-popup-container"
  >
    <div class="contact-popup popup-slide-in-bottom" id="contact-popup">
      <div class="contact-popup-content">
        <p class="contact-popup-description">Schon einen Termin vereinbart?</p>
        <p class="contact-popup-description">Nehmen Sie Kontakt mit mir auf.</p>
        <div class="contact-popup-btn-container">
          <button @click="visitContactSection" class="contact-btn">
            zum Kontakt
          </button>
          <button @click="closePopup" class="close-btn">später</button>
        </div>
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
    }, 5000);
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
