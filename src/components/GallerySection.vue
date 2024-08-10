<template>
  <section class="section-gallery-container">
    <div class="section-gallery-background">
      <h3 class="section-gallery-header">dummy header gallery</h3>
      <ImgGallery />
    </div>
  </section>
</template>

<script>
import ImgGallery from "@/components/ImgGallery";

export default {
  name: "GallerySection",
  components: {
    ImgGallery,
  },
};
</script>

<style scoped>
/* temp styling for build */
.section-gallery-container {
  min-height: 300px;
  width: 100%;
  border: 1px solid white;
}
</style>
