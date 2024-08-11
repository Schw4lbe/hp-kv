<template>
  <nav class="navbar-items">
    <div v-for="(item, index) in navItems" :key="index" class="nav-item">
      {{ item.title }}
    </div>
  </nav>
</template>

<script>
import navData from "../assets/data/content.json";

export default {
  name: "NavbarMain",

  data() {
    return {
      navItems: navData.navItemData,
    };
  },

  methods: {},
};
</script>
