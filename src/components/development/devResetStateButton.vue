<template>
  <button @click="onClickResetStates" class="dev-button-cache-reset">
    reset states
  </button>
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
    },
  },
};
</script>

<style scoped>
.dev-button-cache-reset {
  position: absolute;
  top: 100px;
  padding: 0.5rem 1rem;
  border: none;
  background: tomato;
  color: white;
}
</style>
