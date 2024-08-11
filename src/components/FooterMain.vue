<template>
  <footer class="footer-items">
    <div v-for="(item, index) in footerItems" :key="index" class="footer-item">
      <a href="" class="footer-url">{{ item.title }}</a>
    </div>
  </footer>
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
