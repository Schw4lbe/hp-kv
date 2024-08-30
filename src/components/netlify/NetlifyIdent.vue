<template>
  <button @click="openIdentityModal">DEV Login</button>
  <div id="netlify-modal"></div>
</template>

<script>
import netlifyIdentity from "netlify-identity-widget";

export default {
  name: "NetlifyIdent",

  mounted() {
    // Initialize the Netlify Identity widget
    netlifyIdentity.init({
      container: "#netlify-modal",
      locale: "en",
    });

    netlifyIdentity.on("init", (user) => {
      if (user) {
        this.redirectToCMS();
      }
    });

    // event for development button
    netlifyIdentity.on("login", (user) => {
      if (user) {
        this.redirectToCMS();
      }
    });
  },

  methods: {
    // button event for development
    openIdentityModal() {
      netlifyIdentity.open();
    },
    // ###############

    redirectToCMS() {
      window.location.href = "/cms";
    },
  },
};
</script>
