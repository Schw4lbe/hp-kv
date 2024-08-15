<template>
  <NavbarMain />
  <h3>Privacy</h3>
  <FooterMain />
</template>

<script>
import NavbarMain from "@/components/NavbarMain";
import FooterMain from "../components/FooterMain.vue";

export default {
  name: "PrivacyView",

  components: {
    NavbarMain,
    FooterMain,
  },
};
</script>

<style scoped>
h3 {
  padding-top: 80px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
