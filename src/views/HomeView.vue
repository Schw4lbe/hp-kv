<template>
  <div class="page-wrapper">
    <NavbarMain />
    <div class="content-wrapper">
      <MainSection />
      <ServiceSection />
      <GallerySection />
      <ContactSection />
    </div>
    <FooterMain />
  </div>
</template>

<script>
import NavbarMain from "@/components/NavbarMain";
import MainSection from "@/components/MainSection";
import ServiceSection from "@/components/ServiceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterMain from "@/components/FooterMain";

export default {
  name: "HomeView",

  components: {
    NavbarMain,
    MainSection,
    ServiceSection,
    GallerySection,
    ContactSection,
    FooterMain,
  },
};
</script>
<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.content-wrapper {
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
