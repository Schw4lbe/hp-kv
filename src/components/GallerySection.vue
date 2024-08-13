<template>
  <section class="section-gallery-container">
    <ImgGallery />
    <!-- make gallery to be used with swipes in fullscreen modal like tinder -->
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
