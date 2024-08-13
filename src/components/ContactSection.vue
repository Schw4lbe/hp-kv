<template>
  <section class="section-contact-container">
    <h3 class="section-contact-header">dummy header contact</h3>

    <div class="section-contact-content">
      <div v-if="captchaEnabled === false">
        <button @click="enableCaptcha" class="enable-contact-info-btn">
          get in contact
        </button>
      </div>

      <div v-if="captchaEnabled === true && contactInfoVissible === false">
        <h5>captcha placeholder</h5>
        <button @click="showContactInfo" class="placeholder-button">
          yes, i am human!
        </button>
      </div>

      <div v-if="contactInfoVissible === true" class="section-contact-info">
        <p>
          Phone: <span>{{ contactInfo.phone }}</span>
        </p>
        <p>
          Email: <span>{{ contactInfo.email }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "ContactSection",

  data() {
    return {
      contactInfo: data.contactSection.contactInfoData,

      // dummy captcha data:
      captchaEnabled: false,
      contactInfoVissible: false,
    };
  },

  methods: {
    enableCaptcha() {
      this.captchaEnabled = true;
    },

    showContactInfo() {
      this.contactInfoVissible = true;
    },
  },
};
</script>
