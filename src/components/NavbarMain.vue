<template>
  <div>
    <nav>
      <div>
        <p v-for="(item, index) in navItems" :key="index">
          {{ item.title }}
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
import data from "../assets/content.json";

export default {
  name: "NavbarMain",

  data() {
    return {
      navItems: data.navbarItems,
    };
  },

  methods: {},
};
</script>
