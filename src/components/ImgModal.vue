<template>
  <div class="modal-container">
    <div @click="$emit('closeModal')" class="close-modal-btn"></div>
    <div @click="$emit('nextImage')" class="next-image-btn"></div>
    <div @click="$emit('prevImage')" class="prev-image-btn"></div>

    <h4 class="modal-header">{{ title }}</h4>
    <div class="modal-image-wrapper">
      <img
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchmove="handleTouchMove"
        :src="image"
        alt="Galeriebild"
        class="modal-gallery-image"
      />
    </div>
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

  methods: {
    handleTouchStart(e) {
      this.$emit("touchStart", e);
    },

    handleTouchEnd(e) {
      this.$emit("touchEnd", e);
    },

    handleTouchMove(e) {
      e.preventDefault();
    },
  },
};
</script>

<style scoped></style>
