<template>
  <div class="gallery-container">
    <h3 class="gallery-header">dummy header gallery</h3>
    <div class="img-gallery">
      <div v-for="(image, index) in images" :key="index" class="">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import Image from "../../public/img/galleryImg/galleryimg01.png";

export default {
  name: "ImgGallery",

  data() {
    return {
      images: this.importAllImages(),
    };
  },

  methods: {
    importAllImages() {
      const context = require.context(
        "../../public/img/galleryImg", // path relative to this file
        false, // don't include subdirectories
        /\.(png|jpe?g|svg)$/ // regex to match files
      );
      return context.keys().map(context);
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  width: 300px;
  object-fit: cover;
}
</style>
