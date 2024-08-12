<template>
  <div class="modal-container">
    <button @click="$emit('closeModal')" class="close-modal-btn">
      <img class="modal-close-icon" :src="close" alt="Schließen Symbol" />
    </button>
    <button @click="$emit('nextImage')" class="next-image">
      <img :src="next" alt="Nächstes Bild Symbol" class="next-icon" />
    </button>
    <button @click="$emit('prevImage')" class="prev-image">
      <img :src="prev" alt="Vorheriges Bild Symbol" class="pref-icon" />
    </button>

    <h4 class="modal-header">{{ title }}</h4>
    <img :src="image" alt="Galeriebild" class="modal-gallery-image" />
    <p class="modal-description">{{ description }}</p>
  </div>
</template>

<script>
import closeIcon from "../../public/img/icons/close.svg";
import nextImgIcon from "../../public/img/icons/arrow-next.svg";
import prevImgIcon from "../../public/img/icons/arrow-prev.svg";

export default {
  name: "ImgModal",

  data() {
    return {
      close: closeIcon,
      next: nextImgIcon,
      prev: prevImgIcon,
    };
  },

  props: {
    title: String,
    description: String,
    image: String,
  },
};
</script>

<style scoped></style>
