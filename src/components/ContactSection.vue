<template>
  <section class="section-contact-container" id="section4">
    <h3 class="section-contact-header section-header">{{ header }}</h3>

    <div class="section-contact-content">
      <div
        class="enable-contanct-info-container"
        v-if="captchaEnabled === false"
      >
        <h4 class="section-subheader">{{ enableCaptchaData.header }}</h4>
        <p
          v-for="(item, index) in enableCaptchaData.description"
          :key="index"
          class="enable-contact-info-description"
        >
          {{ item }}
        </p>
        <button @click="enableCaptcha" class="enable-contact-info-btn">
          <img
            class="enable-contact-btn-icon"
            :src="enableBtnIcon"
            alt="Kontakt Icon"
          />
          {{ enableCaptchaData.button }}
        </button>
      </div>

      <div
        class="captcha-render-container"
        v-if="captchaEnabled === true && contactVissible === false"
      >
        <h4 class="section-subheader">{{ verificationData.header }}</h4>
        <p
          v-for="(item, index) in verificationData.description"
          :key="index"
          class="captcha-render-description"
        >
          {{ item }}
        </p>
        <ContactCaptcha @show-contact="showContactInfo" />
      </div>

      <div v-if="contactVissible === true" class="contact-info-container">
        <h4 class="section-subheader">{{ infoData.header }}</h4>
        <p
          v-for="(item, index) in infoData.description"
          :key="index"
          class="contact-info-description"
        >
          {{ item }}
        </p>
        <ul class="contact-info-list">
          <li v-for="(item, index) in infoData.infoOptions" :key="index">
            <img :src="listIcon" alt="List Icon" class="list-icon-front" />{{
              item
            }}
          </li>
        </ul>
        <div class="contact-email">
          <img class="contact-email-icon" :src="mailIcon" alt="" />
          <span>{{ infoData.email }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import data from "../assets/data/content.json";
import EnableBtnIcon from "../../public/img/icons/contact-btn-icon.svg";
import ListIcon from "../../public/img/icons/list-icon.svg";
import MailIcon from "../../public/img/icons/navIcons/04nav-contact.svg";

import ContactCaptcha from "../components/ContactCaptcha.vue";

export default {
  name: "ContactSection",

  components: {
    ContactCaptcha,
  },

  data() {
    return {
      header: data.contactSection.content.header,

      // enable captcha
      enableCaptchaData: data.contactSection.content.enableCaptcha,
      enableBtnIcon: EnableBtnIcon,

      // verification
      verificationData: data.contactSection.content.verification,

      // contact info
      infoData: data.contactSection.content.infoData,
      listIcon: ListIcon,
      mailIcon: MailIcon,

      captchaEnabled: false,
      contactVissible: false,
    };
  },

  computed: {
    ...mapGetters(["getUserVerifiedStatus"]),
  },

  created() {
    this.checkVerificationStatus(this.getUserVerifiedStatus);
  },

  methods: {
    checkVerificationStatus(bool) {
      if (bool === true) {
        this.captchaEnabled = true;
        this.contactVissible = true;
      } else {
        return;
      }
    },

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
