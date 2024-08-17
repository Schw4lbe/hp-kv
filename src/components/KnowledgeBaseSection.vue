<template>
  <section class="section-knowledge-container" id="section5">
    <h3 class="section-knowledge-header section-header">
      {{ header }}
    </h3>
    <div class="card-container">
      <div v-for="(item, index) in knowledgeBaseData" :key="index" class="card">
        <div class="card-inner">
          <div class="card-front">
            <p class="item-teaser">{{ item.teaser }}</p>
            <img class="item-image" :src="item.image" alt="dummy" />
            <button @click="flipCard" class="show-details-btn">
              Mehr erfahren...
            </button>
          </div>
          <div class="card-back">
            <h3 class="item-header">{{ item.header }}</h3>
            <p class="item-description">{{ item.description }}</p>
            <button @click="flipCard" class="hide-details-btn">
              verstanden.
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "devDummy",

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
        teaser: content[index]?.teaser || "Default Teaser",
        description: content[index]?.description || "Default Description",
      }));
    },

    flipCard(e) {
      const card = e.target.closest(".card");
      card.classList.toggle("flipped");
    },
  },
};
</script>
