<template>
  <div>
    <NavbarMain />
    <MainSection />
    <ServiceSection />
    <GallerySection />
    <ContactSection />
  </div>
</template>

<script>
import NavbarMain from "@/components/NavbarMain";
import MainSection from "@/components/MainSection";
import ServiceSection from "@/components/ServiceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default {
  name: "HomeView",

  components: {
    NavbarMain,
    MainSection,
    ServiceSection,
    GallerySection,
    ContactSection,
  },
};
</script>
