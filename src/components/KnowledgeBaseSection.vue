<template>
  <section class="section-knowledge-container" id="section5">
    <!-- <div class="separator-container">
      <img src="../../public/img/branch.png" alt="" id="test3" />
    </div> -->
    <h3 class="section-knowledge-header section-header">
      {{ header }}
    </h3>
    <div class="card-container">
      <div
        v-for="(item, index) in knowledgeBaseData"
        :key="index"
        class="card-item"
      >
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
import data from "../../public/content.json";

export default {
  name: "devDummy",

  data() {
    return {
      header: data.sectionHeaders[0].knowledgeSectionHeader,
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
      const content = data.knowledgeData;

      return images.map((image, index) => ({
        image,
        header: content[index]?.header || "Default Title",
        teaser: content[index]?.teaser || "Default Teaser",
        description: content[index]?.description || "Default Description",
      }));
    },

    flipCard(e) {
      const card = e.target.closest(".card-item");
      card.classList.toggle("flipped");
    },
  },
};
</script>

<style scoped>
.separator-container {
  filter: invert(100%) sepia(100%);
}

#test3 {
  margin-top: -70px;
  height: 250px !important;
  width: 100% !important;
  object-fit: contain !important;
  transform: rotate(60deg);
}
</style>
