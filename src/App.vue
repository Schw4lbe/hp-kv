<template>
  <div>
    <NavbarMain />
    <router-view />
  </div>
</template>

<script>
import NavbarMain from "@/components/NavbarMain";

export default {
  components: {
    NavbarMain,
  },
};
</script>
