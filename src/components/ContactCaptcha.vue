<template>
  <form class="captcha-container" id="contact-captcha">
    <span class="captcha"> {{ phraseForHmtl }} </span>
    <span class="description">{{ captchaDescription }}</span>
    <input
      v-model="solution"
      id="captcha"
      type="text"
      placeholder="Lösung hier eingeben"
    />
    <input
      v-model="honeypot"
      id="captcha-repeat"
      type="text"
      placeholder="Lösung erneut eingeben"
    />
    <input @click="onSubmitCaptcha" type="submit" value="senden" />

    <div v-if="captchaSolved != null" class="captcha-result">
      <span v-if="captchaSolved === true" class="success">Ok.</span>
      <span v-if="captchaSolved === false" class="error">Fehler!</span>
    </div>
  </form>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "ContactCaptcha",

  data() {
    return {
      solution: "",
      honeypot: "",
      captchaSolved: null,
      captchaPhrases: data.contactSection.captcha.phrases,
      captchaDescription: data.contactSection.captcha.description,
      captchaPhrase: "",
      phraseForHmtl: "",
    };
  },

  created() {
    this.setCaptchaPhrase();
  },

  methods: {
    onSubmitCaptcha(e) {
      e.preventDefault();
      const solution = document.querySelector("#captcha").value.toLowerCase();
      const honeypot = document.querySelector("#captcha-repeat").value;
      if (solution === this.captchaPhrase && honeypot === "") {
        this.captchaSolved = true;
        setTimeout(() => {
          this.$emit("show-contact");
        }, 1500);
      } else {
        this.captchaSolved = false;
        this.setCaptchaPhrase();
        setTimeout(() => {
          this.captchaSolved = null;
        }, 1500);
      }
      this.solution = "";
    },

    setCaptchaPhrase() {
      const index = this.getRandomIndex();
      this.captchaPhrase = this.captchaPhrases[index];
      this.setphraseForHmtl();
    },

    getRandomIndex() {
      const length = this.captchaPhrases.length;
      return Math.floor(Math.random() * length);
    },

    setphraseForHmtl() {
      const word = this.captchaPhrase.toUpperCase();
      this.phraseForHmtl =
        word[word.length - 1] + word.slice(0, word.length - 1);
    },
  },
};
</script>
