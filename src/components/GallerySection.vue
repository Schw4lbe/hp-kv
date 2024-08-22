<template>
  <section class="section-gallery-container" id="section3">
    <div class="separator-container">
      <img src="../../public/img/branch.png" alt="" id="test2" />
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

<style scoped>
.separator-container {
  filter: invert(100%) sepia(100%);
}

#test2 {
  margin-top: -90px;
  height: 250px !important;
  width: 100% !important;
  object-fit: contain !important;
  transform: rotate(240deg);
}
</style>
