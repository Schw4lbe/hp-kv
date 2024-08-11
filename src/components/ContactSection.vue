<template>
  <section class="section-contact-container">
    <div class="section-contact-background">
      <h3 class="section-contact-header">dummy header contact</h3>
      <div class="section-contact-info">
        <button class="enable-contact-info-btn">get in contact</button>

        <!-- on button click show captcha -->
        <!-- captcha TBD as own component -->
        <!-- talk to customer to be sure to create captcha idea -->
        <!-- ideas: https://codepen.io/oliviale/pen/RwWdNRd -->

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
import data from "../assets/data/content.json";

export default {
  name: "ContactSection",

  data() {
    return {
      contactInfo: data.contactInfoData,
    };
  },
};
</script>
