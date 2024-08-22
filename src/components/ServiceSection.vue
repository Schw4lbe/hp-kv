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
import data from "../assets/data/content.json";

export default {
  name: "ServiceSection",

  data() {
    return {
      header: data.serviceSection.header,
      serviceContent: this.importKnowledgeBaseData(),
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

    importKnowledgeBaseData() {
      const images = this.importAllImages();
      const content = data.serviceSection.itemData;

      return images.map((image, index) => ({
        image,
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
