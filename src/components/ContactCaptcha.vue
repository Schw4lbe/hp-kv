<template>
  <form class="captcha-container">
    <span class="captcha"> UBLA </span>
    <span class="description">Lösungswort in Textfeld schreiben</span>
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
      <span v-if="captchaSolved === true" class="success">success</span>
      <span v-if="captchaSolved === false" class="error">error</span>
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
        console.log("captcha solved.");
        this.captchaSolved = true;
        this.$emit("show-contact");
      } else {
        console.log("do it again!");
        this.captchaSolved = false;
      }
      this.solution = "";
    },
  },
};
</script>
