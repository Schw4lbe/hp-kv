<template>
  <section class="section-service-container" id="section2">
    <h3 class="section-service-header section-header">{{ header }}</h3>

    <div
      class="section-service-accordion accordion accordion-flush"
      id="accordionPanelsStayOpenExample"
    >
      <div
        v-for="(item, index) in serviceContent"
        :key="index"
        class="accordion-item"
      >
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            :class="{ collapsed: index > 0 }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#panelsStayOpen-${index}`"
            :aria-expanded="index === 0 ? 'true' : 'false'"
            :aria-controls="`panelsStayOpen-${index}`"
          >
            {{ item.header }}
          </button>
        </h2>
        <div
          :id="`panelsStayOpen-${index}`"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
        >
          <div class="accordion-body">
            <p>{{ item.description }}</p>
            <img :src="item.image" alt="Bild Dienstleistung" />
          </div>
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
.accordion-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

img {
  height: auto;
  width: 100%;
  object-fit: cover;
}
</style>
