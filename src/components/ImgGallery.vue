<template>
  <div class="gallery-container">
    <div class="img-gallery">
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
        <div class="carousel-indicators">
          <button
            v-for="count in carouselItemCount"
            :key="count"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            :data-bs-slide-to="count - 1"
            :aria-label="'Slide ' + count"
            :class="{ active: count === 1 }"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(item, index) in galleryData"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <img
              :src="item.thumbnail"
              class="d-block w-100"
              alt="Galerie Bild"
              :id="index"
              @click="showModal"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div v-if="viewModal === true" class="modal-render-container">
      <ImgModal
        @close-modal="closeModal"
        @next-image="nextImage"
        @prev-image="prevImage"
        @touch-start="setTouchStartX"
        @touch-end="setTouchEndX"
        :title="modalTitle"
        :description="modalDescription"
        :image="modalImageLink"
      />
    </div>
  </div>
</template>

<script>
import data from "../../public/content.json";
import ImgModal from "@/components/ImgModal";

export default {
  name: "ImgGallery",

  components: {
    ImgModal,
  },

  data() {
    return {
      header: data.sectionHeaders[0].imgGalleryHeader,
      galleryData: this.initGalleryData(),

      // bootstrap control:
      carouselItemCount: null,

      // Modal info storage:
      viewModal: false,
      currentIndex: null,
      modalTitle: "",
      modalDescription: "",
      modalImageLink: "",

      // touch events:
      touchStartX: 0,
      touchEndX: 0,
    };
  },

  mounted() {
    this.getCarouselItemCount();
  },

  methods: {
    initGalleryData() {
      const thumbnails = this.importAllThumbnails();
      const images = this.importAllImages();
      const metadata = data.galleryImgData;

      return images.map((image, index) => ({
        image,
        thumbnail: thumbnails[index],
        title: metadata[index]?.title || "Default Title",
        description: metadata[index]?.description || "Default Description",
      }));
    },

    importAllImages() {
      const context = require.context(
        "../../public/img/galleryImg",
        false,
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    importAllThumbnails() {
      const context = require.context(
        "../../public/img/galleryThumbnail",
        false,
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    getCarouselItemCount() {
      this.carouselItemCount = this.galleryData.length;
    },

    setTouchStartX(e) {
      this.touchStartX = e.touches[0].clientX;
    },

    setTouchEndX(e) {
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleSwipe();
    },

    handleSwipe() {
      const minMoveX = 50;
      const diffX = this.touchStartX - this.touchEndX;
      if (diffX > minMoveX) {
        this.nextImage();
      } else if (diffX < -minMoveX) {
        this.prevImage();
      }
    },

    showModal(e) {
      const targetIndex = parseInt(e.target.id);
      this.currentIndex = targetIndex;
      this.viewModal = true;
      this.updateModalData(targetIndex);
    },

    closeModal() {
      this.viewModal = false;
      this.modalTitle = "";
      this.modalDescription = "";
      this.modalImageLink = "";
    },

    nextImage() {
      if (this.currentIndex + 1 >= this.galleryData.length) {
        this.currentIndex = 0;
        this.updateModalData(this.currentIndex);
      } else {
        this.currentIndex++;
        this.updateModalData(this.currentIndex);
      }
    },

    prevImage() {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.galleryData.length - 1;
        this.updateModalData(this.currentIndex);
      } else {
        this.currentIndex--;
        this.updateModalData(this.currentIndex);
      }
    },

    updateModalData(index) {
      this.modalTitle = data.galleryImgData[index]?.title || "Default Title";
      this.modalDescription =
        data.galleryImgData[index]?.description || "Default Description";
      this.modalImageLink = this.importAllImages()[index];
    },
  },
};
</script>
