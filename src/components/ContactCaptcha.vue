<template>
  <form>
    <span class="captcha"> UBLA </span>
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
    <input @click="onSubmitCaptcha" type="submit" value="submit" />

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
      } else {
        console.log("do it again!");
        this.captchaSolved = false;
      }
      this.solution = "";
    },
  },
};
</script>

<style scoped>
body {
  background: #335778;
}
* {
  box-sizing: border-box;
}

form {
  width: 320px;
  border: 1px solid #fafafa;
  margin: 5em auto 0;
  padding: 2em;
  background: #fafafa;
  color: #444;
  border-radius: 3px;
}
.captcha {
  padding-left: 2em;
  text-align: center;
  display: block;
  margin-bottom: 0.5em;
  font-size: 2em;
  letter-spacing: 8px;
}

.captcha::first-letter {
  position: relative;
  margin-right: -3.6em;
}

#captcha-repeat {
  height: 0px;
  width: 0px;
  overflow: hidden;
  position: absolute;
  top: -9999px;
  left: -9999px;
}

input[type="text"] {
  display: block;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 4px;
  border: 1px solid #aaa;
  padding: 5px;
}
input[type="submit"] {
  background: #364d8f;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
}

.notice {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background: #fafafa;
  font-size: 1.4em;
  text-align: center;
  padding: 0.5em;
  color: #328580;
  font-weight: 700;
}
</style>
