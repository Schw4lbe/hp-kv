<template>
  <NavbarMain />
  <MainSection />
  <GallerySection />
  <ServiceSection />
  <ContactSection />
  <KnowledgeBaseSection />
  <FooterMain />
  <ContactPopup />
  <PrivacyPopup />
</template>

<script>
import NavbarMain from "@/components/NavbarMain";
import MainSection from "@/components/MainSection";
import ServiceSection from "@/components/ServiceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import KnowledgeBaseSection from "@/components/KnowledgeBaseSection";
import FooterMain from "@/components/FooterMain";
import ContactPopup from "@/components/ContactPopup";
import PrivacyPopup from "@/components/PrivacyPopup";

export default {
  name: "HomeView",

  components: {
    NavbarMain,
    MainSection,
    ServiceSection,
    GallerySection,
    ContactSection,
    KnowledgeBaseSection,
    FooterMain,
    ContactPopup,
    PrivacyPopup,
  },
};
</script>
