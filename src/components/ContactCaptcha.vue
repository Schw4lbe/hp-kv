<template>
  <form class="captcha-container" id="contact-captcha">
    <span class="captcha"> UBLA </span>
    <span class="description">Lösungswort eintragen</span>
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
      <span v-if="captchaSolved === true" class="success">Erfolg</span>
      <span v-if="captchaSolved === false" class="error">Fehler</span>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactCaptcha",

  data() {
    return {
      solution: "",
      honeypot: "",
      captchaSolved: null,
    };
  },

  methods: {
    onSubmitCaptcha(e) {
      e.preventDefault();
      const solution = document.querySelector("#captcha").value.toLowerCase();
      const honeypot = document.querySelector("#captcha-repeat").value;
      if (solution === "blau" && honeypot === "") {
        this.captchaSolved = true;
        setTimeout(() => {
          this.$emit("show-contact");
        }, 1500);
      } else {
        this.captchaSolved = false;
        setTimeout(() => {
          this.captchaSolved = null;
        }, 1500);
      }
      this.solution = "";
    },
  },
};
</script>
