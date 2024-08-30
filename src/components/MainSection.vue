<template>
  <section class="section-main-container" id="section1">
    <div class="dev-button-container">
      <devResetStateButton />
      <NetlifyIdent />
    </div>
    <div class="section-main-banner-container">
      <div class="section-main-logo">
        <img class="logo" :src="logo" alt="Firmenlogo" />
      </div>
      <div class="section-main-banner">
        <div
          v-for="(item, index) in bannerContent"
          :key="index"
          class="banner-content"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../../public/content.json";
import Logo from "../../public/img/logo2.png";
import devResetStateButton from "./development/devResetStateButton.vue";
import NetlifyIdent from "./netlify/NetlifyIdent.vue";

export default {
  name: "MainSection",

  components: {
    devResetStateButton,
    NetlifyIdent,
  },

  data() {
    return {
      bannerContent: data.bannerItemData,
      logo: Logo,
    };
  },
};
</script>

<style>
.dev-button-container {
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
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
