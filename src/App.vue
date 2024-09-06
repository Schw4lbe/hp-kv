<template>
  <div class="app-background">
    <img src="../public/img/background.jpg" alt="Hintergrundbild" />
  </div>
  <router-view />
</template>

<script></script>

<style scoped>
.app-background {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -999;
}

img {
  height: 200%;
  width: 100%;
  object-fit: cover;
}
</style>
