<template>
  <nav class="navbar-items">
    <div v-for="(item, index) in navItems" :key="index" class="nav-item">
      {{ item.title }}
    </div>
  </nav>
</template>

<script>
import navData from "../assets/content.json";

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

<style scoped>
.navbar-items {
  display: flex;
  justify-content: center;

  height: max-content;
  width: 100%;
  border: 1px solid blue;
}

.nav-item {
  padding: 0.5rem;
  margin: 0 0.5rem;
  border: 1px solid yellow;
  background: #555;
}

.nav-item:hover {
  background: #aaa;
  color: black;
}
</style>
