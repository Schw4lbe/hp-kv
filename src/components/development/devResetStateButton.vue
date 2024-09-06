<template>
  <button @click="onClickResetStates">reset states</button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "devResetStateButton",

  methods: {
    ...mapMutations(["resetPrivacyPopupStatus", "resetUserVerified"]),

    onClickResetStates() {
      this.resetPrivacyPopupStatus(false);
      this.resetUserVerified(false);
      console.log("state reset.");
    },
  },
};
</script>

<style>
.dev-button-container {
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}

.dev-button-container button {
  padding: 0.5rem 1rem;
  border: none;
  background: tomato;
  color: white;
  margin: 0.5rem;
}
</style>
