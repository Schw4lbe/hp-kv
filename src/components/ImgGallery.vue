<template>
  <div class="gallery-container">
    <h3 class="gallery-header">dummy header gallery</h3>
    <div class="img-gallery">
      <div
        v-for="(item, index) in galleryData"
        :key="index"
        class="gallery-item"
      >
        <h4 class="gallery-item-header">{{ item.title }}</h4>
        <img :src="item.image" alt="Galeriebild" class="gallery-item-image" />
        <p class="gallery-item-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgMetadata from "../assets/data/content.json";

export default {
  name: "ImgGallery",

  data() {
    return {
      // images: this.importAllImages(),
      galleryData: this.importAllImagesWithMetaData(),
    };
  },

  methods: {
    importAllImages() {
      const context = require.context(
        "../../public/img/galleryImg",
        false, // don't include subdirectories
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    importAllImagesWithMetaData() {
      const images = this.importAllImages();
      const metadata = imgMetadata.galleryImgData;

      return images.map((image, index) => ({
        image,
        title: metadata[index]?.title || "Default Title",
        description: metadata[index]?.description || "Default Description",
      }));
    },
  },
};
</script>
