<template>
  <div class="dev-container">
    <devDummy />
  </div>
</template>

<script>
import devDummy from "../components/development/devDummy";

export default {
  name: "devView",

  components: {
    devDummy,
  },
};
</script>

<style scoped>
h2 {
  width: 100%;
  text-align: center;
  padding: 2rem;
}
.dev-container {
  background: #222;
  color: beige;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
