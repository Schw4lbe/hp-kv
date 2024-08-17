<template>
  <section class="section-contact-container" id="section4">
    <h3 class="section-contact-header section-header">{{ header }}</h3>

    <div class="section-contact-content">
      <div
        class="enable-contanct-info-container"
        v-if="captchaEnabled === false"
      >
        <h4 class="section-subheader">Haben Sie Fragen?</h4>
        <p class="enable-contact-info-description">
          Schreiben Sie mir gern eine E-Mail.
        </p>
        <p class="enable-contact-info-description">
          Nutzen Sie die folgende Schaltfläche zur Anzeige meiner Kontaktdaten.
        </p>
        <button @click="enableCaptcha" class="enable-contact-info-btn">
          <img class="btn-icon" :src="btnIcon" alt="Kontakt Icon" />
          {{ button }}
        </button>
      </div>

      <div
        class="captcha-render-container"
        v-if="captchaEnabled === true && contactVissible === false"
      >
        <h4 class="section-subheader">Verifizierung</h4>

        <p class="captcha-render-description">
          Bitte lösen Sie die folgende Aufgabe zur Verifizierung.
        </p>
        <p class="captcha-render-description">
          Groß- und Kleinschreibung spielt dabei keine Rolle.
        </p>
        <ContactCaptcha @show-contact="showContactInfo" />
      </div>

      <div v-if="contactVissible === true" class="contact-info-container">
        <h4 class="section-subheader">Die nächsten Schritte</h4>

        <p class="contact-info-description">
          Vorstellungen und Wünschen können sehr individuell ausfallen. Lassen
          Sie uns gern im Vorfeld unverbindlich miteinander sprechen.
        </p>
        <p class="contact-info-description">
          Für eine optimale Gesprächsvorbereitung, benötige ich im besten Fall
          die folgenden Infos.
        </p>
        <ul class="contact-info-list">
          <li>
            <img
              :src="listIcon"
              alt="List Icon"
              class="list-icon-front"
            />präzise Beschreibung der Arbeit
          </li>
          <li>
            <img
              :src="listIcon"
              alt="List Icon"
              class="list-icon-front"
            />Bilder, Pläne & Co. der Szenerie
          </li>
          <li>
            <img
              :src="listIcon"
              alt="List Icon"
              class="list-icon-front"
            />geschätze Preisvorstellung
          </li>
          <li>
            <img
              :src="listIcon"
              alt="List Icon"
              class="list-icon-front"
            />Anschrift und Parkmöglichkeit
          </li>
        </ul>
        <div class="contact-email">
          <img class="contact-email-icon" :src="mailIcon" alt="" />
          Email: <span>{{ contactInfo.email }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonIcon from "../../public/img/icons/contact-btn-icon.svg";
import ListIcon from "../../public/img/icons/list-icon.svg";
import MailIcon from "../../public/img/icons/navIcons/04nav-contact.svg";
import data from "../assets/data/content.json";
import ContactCaptcha from "../components/ContactCaptcha.vue";

export default {
  name: "ContactSection",

  components: {
    ContactCaptcha,
  },

  data() {
    return {
      btnIcon: ButtonIcon,
      listIcon: ListIcon,
      mailIcon: MailIcon,
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
