<template>
  <section class="section-main-container" id="section1">
    <devResetStateButton />
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
import data from "../assets/data/content.json";
import Logo from "../../public/img/logo2.png";
import devResetStateButton from "./development/devResetStateButton.vue";

export default {
  name: "MainSection",

  components: {
    devResetStateButton,
  },

  data() {
    return {
      bannerContent: data.mainSection.bannerItemData,
      logo: Logo,
    };
  },
};
</script>
