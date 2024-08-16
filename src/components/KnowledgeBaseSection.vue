<template>
  <section class="section-knowledge-container" id="section5">
    <h3 class="section-knowledge-header">{{ header }}</h3>

    <div class="section-knowledge-items">
      <div
        v-for="(item, index) in knowledgeBaseData"
        :key="index"
        class="section-knowledge-item"
      >
        <div class="knowledge-item-image-container">
          <img
            class="knowledge-item-image"
            :src="item.image"
            alt="Beschreibungsbild"
          />
        </div>
        <div class="knowledge-item-content">
          <h4 class="knowledge-item-header">{{ item.header }}</h4>
          <p class="knowledge-item-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "KnowledgeBaseSection",

  data() {
    return {
      header: data.knowledgeSection.header,
      knowledgeBaseData: this.importKnowledgeBaseData(),
    };
  },

  methods: {
    importAllImages() {
      const context = require.context(
        "../../public/img/knowledgeImg",
        false,
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    importKnowledgeBaseData() {
      const images = this.importAllImages();
      const content = data.knowledgeSection.knowledgeData;

      return images.map((image, index) => ({
        image,
        header: content[index]?.header || "Default Title",
        description: content[index]?.description || "Default Description",
      }));
    },
  },
};
</script>
