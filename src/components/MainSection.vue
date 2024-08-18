<template>
  <section class="section-main-container" id="section1">
    <button class="dev-button-cache-reset">reset states</button>
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
import Logo from "../../public/img/logo.png";

export default {
  name: "MainSection",

  data() {
    return {
      bannerContent: data.mainSection.bannerItemData,
      logo: Logo,
    };
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
