<template>
  <section class="section-main-container">
    <div class="section-main-background">
      <h3 class="section-main-header">dummy header main</h3>
      <div class="section-main-banner-container">
        <div class="section-main-logo"></div>
        <div class="section-main-content">
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
    </div>
  </section>
</template>

<script>
import bannerData from "../assets/data/content.json";

export default {
  name: "MainSection",

  data() {
    return {
      bannerContent: bannerData.bannerItemData,
    };
  },
};
</script>
