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
