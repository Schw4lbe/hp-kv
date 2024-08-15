<template>
  <NavbarMain />
  <h3>Imprint</h3>
  <FooterMain />
</template>

<script>
import NavbarMain from "@/components/NavbarMain";
import FooterMain from "../components/FooterMain.vue";

export default {
  name: "ImprintView",

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
