<template>
  <section class="section-contact-container">
    <div class="section-contact-background">
      <h3 class="section-contact-header">dummy header contact</h3>
      <div class="section-contact-info">
        <button class="enable-contact-info-btn">get in contact</button>

        <!-- on button click show captcha -->
        <!-- captcha TBD as own component -->
        <div>captcha placeholder</div>

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
import contactData from "../assets/content.json";

export default {
  name: "ContactSection",

  data() {
    return {
      contactInfo: contactData.contactInfoData,
    };
  },
};
</script>

<style scoped>
/* temp styling for build */
.section-contact-container {
  min-height: 300px;
  width: 100%;
  border: 1px solid white;
}
</style>
