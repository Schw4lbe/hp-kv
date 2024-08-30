<template>
  <section class="section-service-container" id="section2">
    <div class="separator-container">
      <img src="../../public/img/branch.png" alt="" id="test" />
    </div>
    <h3 class="section-service-header section-header">{{ header }}</h3>
    <div class="section-service-items">
      <div
        v-for="(item, index) in serviceContent"
        :key="index"
        class="service-item"
      >
        <div class="service-content-container">
          <h4 class="service-item-header">{{ item.header }}</h4>
          <p class="service-item-description">{{ item.description }}</p>
        </div>
        <div class="service-item-image-container">
          <img
            class="service-item-image"
            :src="item.image"
            alt="Bild Dienstleistung"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../../public/content.json";

export default {
  name: "ServiceSection",

  data() {
    return {
      header: data.sectionHeaders[0].serviceSectionHeader,
      serviceContent: this.importServiceData(),
    };
  },

  methods: {
    importAllImages() {
      const context = require.context(
        "../../public/img/serviceImg",
        false,
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    importServiceData() {
      const images = this.importAllImages();
      const imageLastIndex = images.length - 1;
      const content = data.serviceItemData;
      const maxLength = Math.max(images.length, content.length);

      return Array.from({ length: maxLength }).map((_, index) => ({
        image:
          images[index] !== undefined ? images[index] : images[imageLastIndex],
        header: content[index]?.header || "Default Title",
        description: content[index]?.description || "Default Description",
      }));
    },
  },
};
</script>
<style scoped>
.separator-container {
  filter: invert(100%) sepia(100%);
}

#test {
  margin-top: -70px;
  height: 250px !important;
  width: 100% !important;
  object-fit: contain !important;
  transform: rotate(60deg);
}
</style>
