<template>
  <div class="navbar-container">
    <nav class="navbar-items">
      <div v-for="(item, index) in navItemData" :key="index" class="nav-item">
        <img :src="item.icon" alt="Icon" class="nav-item-icon" />
        <span>{{ item.title }}</span>
      </div>
    </nav>
  </div>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "NavbarMain",

  data() {
    return {
      navItemData: this.importAllIconsWithData(),
    };
  },

  methods: {
    importAllIcons() {
      const context = require.context(
        "../../public/img/icons/navIcons",
        false,
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    importAllIconsWithData() {
      const icons = this.importAllIcons();
      const navData = data.navbarMain.itemData;
      return icons.map((icon, index) => ({
        icon,
        title: navData[index].title,
      }));
    },
  },
};
</script>
