<template>
  <section class="section-main-container" id="section1">
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
      <div class="section-main-options">
        <button class="main-option-btn">OPTION BUTTON</button>
      </div>
    </div>
  </section>
  <div class="section-main-separator"></div>
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
