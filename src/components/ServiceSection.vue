<template>
  <section class="section-service-container" id="section2">
    <h3 class="section-service-header">dummy header service</h3>
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
        <div class="dummy-img-container">
          <img class="dummy-img" :src="item.image" alt="Bild Dienstleistung" />
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
