<template>
  <div class="section-dev">
    <img
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      src="../../../public/img/galleryImg/galleryimg01.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "devDummy",

  data() {
    return {
      startX: 0,
      endX: 0,
    };
  },

  methods: {
    touchStart(e) {
      this.startX = e.touches[0].clientX;
    },

    touchMove(e) {
      e.preventDefault();
    },

    touchEnd(e) {
      this.endX = e.changedTouches[0].clientX;
      this.handleSwipe();
    },

    handleSwipe() {
      const minX = 50;
      const diffX = this.startX - this.endX;

      if (diffX > minX) {
        console.log("swipe left.");
      } else if (diffX < -minX) {
        console.log("swipe right.");
      } else {
        console.log("no action.");
      }
    },
  },
};
</script>
