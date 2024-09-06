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
  top: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
}

.dev-button-container button {
  font-size: 10px;
  padding: 2px 4px;
  border: none;
  background: black;
  color: white;
  margin: 0.5rem;
}
</style>
