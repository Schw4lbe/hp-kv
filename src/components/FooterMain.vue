<template>
  <div class="footer-container">
    <footer class="footer-items">
      <div
        v-for="(item, index) in footerItems"
        :key="index"
        class="footer-item"
      >
        <a href="" class="footer-url">{{ item.title }}</a>
      </div>
    </footer>
  </div>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "FooterMain",

  data() {
    return {
      footerItems: data.footerItemData,
    };
  },
};
</script>
