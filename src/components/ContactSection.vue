<template>
  <section class="section-contact-container" id="section4">
    <h3 class="section-contact-header">dummy header contact</h3>

    <div class="section-contact-content">
      <div v-if="captchaEnabled === false">
        <button @click="enableCaptcha" class="enable-contact-info-btn">
          get in contact
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
      captchaEnabled: false,
      contactVissible: false,
    };
  },

  methods: {
    enableCaptcha() {
      this.captchaEnabled = true;
    },

    showContactInfo() {
      console.log("showContactInfo");
      this.contactVissible = true;
    },
  },
};
</script>
