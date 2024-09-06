<template>
  <div class="dev">
    <div v-for="number in count" :key="number" class="test">
      Index: {{ number - 1 }} Slide: {{ number }}
    </div>
  </div>
</template>

<script>
export default {
  name: "devDummy",

  data() {
    return {
      count: 8,
    };
  },

  mounted() {},

  unmounted() {},

  methods: {},
};
</script>
