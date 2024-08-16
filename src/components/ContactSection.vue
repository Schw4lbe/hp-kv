<template>
  <section class="section-contact-container" id="section4">
    <h3 class="section-contact-header section-header">{{ header }}</h3>

    <div class="section-contact-content">
      <div v-if="captchaEnabled === false">
        <button @click="enableCaptcha" class="enable-contact-info-btn">
          {{ button }}
        </button>
      </div>

      <div v-if="captchaEnabled === true && contactVissible === false">
        <ContactCaptcha @show-contact="showContactInfo" />
      </div>

      <div v-if="contactVissible === true" class="section-contact-info">
        <p class="contact-email">
          Email: <span>{{ contactInfo.email }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../assets/data/content.json";
import ContactCaptcha from "../components/ContactCaptcha.vue";

export default {
  name: "ContactSection",

  components: {
    ContactCaptcha,
  },

  data() {
    return {
      contactInfo: data.contactSection.contactInfoData,
      header: data.contactSection.content.header,
      button: data.contactSection.content.button,
      captchaEnabled: false,
      contactVissible: false,
    };
  },

  methods: {
    enableCaptcha() {
      this.captchaEnabled = true;
      setTimeout(() => {
        const target = document.querySelector("#section4");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, "300");
    },

    showContactInfo() {
      this.contactVissible = true;
    },
  },
};
</script>
