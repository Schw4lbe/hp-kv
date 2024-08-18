<template>
  <section class="section-gallery-container" id="section3">
    <div class="separator-container">
      <img src="../../public/img/separator2.jpg" alt="" id="test2" />
    </div>
    <ImgGallery />
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
