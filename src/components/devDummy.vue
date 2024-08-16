<template>
  <div class="section-dev">
    <div
      @mouseenter="flipCard"
      @mouseleave="flipCard"
      v-for="(item, index) in knowledgeBaseData"
      :key="index"
      class="card"
    >
      <div class="card-inner">
        <div class="card-front">
          <img class="item-image" :src="item.image" alt="dummy" />
        </div>
        <div class="card-back">
          <p class="item-teaser">{{ item.teaser }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "devDummy",

  data() {
    return {
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
        teaser: content[index]?.teaser || "Default Teaser",
        description: content[index]?.description || "Default Description",
      }));
    },

    flipCard(e) {
      const card = e.target;
      card.classList.toggle("flipped");
    },
  },
};
</script>
