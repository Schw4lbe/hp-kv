<template>
  <form class="captcha-container" id="contact-captcha">
    <span class="captcha"> {{ phraseForHmtl }} </span>
    <span class="description">{{ captchaDescription }}</span>
    <input
      @keyup="checkSolutionLength"
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
    <div v-if="captchaSolved != null" class="captcha-result">
      <span v-if="captchaSolved === true" class="success">Ok.</span>
      <span v-if="captchaSolved === false" class="error">Fehler!</span>
    </div>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import data from "../../public/content.json";

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
    ...mapMutations(["setUserVerified"]),

    checkSolutionLength() {
      if (this.solution.length >= 4) {
        this.submitCaptcha();
      }
    },

    submitCaptcha() {
      const solution = this.solution.toLocaleLowerCase().trim();
      const honeypot = document.querySelector("#captcha-repeat").value;

      if (solution === this.captchaPhrase && honeypot === "") {
        this.setUserVerified(true);
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
