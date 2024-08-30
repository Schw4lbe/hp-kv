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
    },
  },
};
</script>
