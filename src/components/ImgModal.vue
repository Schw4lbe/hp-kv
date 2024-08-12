<template>
  <div class="modal-container">
    <p>{{ title }}</p>
    <p>{{ description }}</p>
    <img :src="image" alt="Galeriebild" class="modal-gallery-image" />
    <button @click="$emit('closeModal')" class="close-modal-btn">close</button>
  </div>
</template>

<script>
export default {
  name: "ImgModal",

  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>
