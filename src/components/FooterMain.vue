<template>
  <div class="footer-container">
    <footer class="footer-items">
      <div
        v-for="(item, index) in footerItems"
        :key="index"
        class="footer-item"
      >
        <RouterLink :to="item.url" class="footer-url">{{
          item.title
        }}</RouterLink>
      </div>
    </footer>
  </div>
</template>

<script>
import data from "../../public/content.json";

export default {
  name: "FooterMain",

  data() {
    return {
      footerItems: data.footerItemData,
    };
  },
};
</script>
