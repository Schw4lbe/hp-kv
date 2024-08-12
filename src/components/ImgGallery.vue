<template>
  <div class="gallery-container">
    <h3 class="gallery-header">dummy header gallery</h3>
    <div class="img-gallery">
      <div
        v-for="(item, index) in galleryData"
        :key="index"
        class="gallery-item"
      >
        <h4 class="gallery-item-header">{{ item.title }}</h4>
        <img
          @click="onClickShowModal"
          :src="item.image"
          alt="Galeriebild"
          class="gallery-item-image"
          :id="index"
        />
        <p class="gallery-item-description">{{ item.description }}</p>
      </div>
    </div>
    <div v-if="viewModal === true" class="modal-render-container">
      <ImgModal
        @close-modal="onClickCloseModal"
        @next-image="onClickNextImage"
        @prev-image="onClickPrevImage"
        :title="modalTitle"
        :description="modalDescription"
        :image="modalImageLink"
      />
    </div>
  </div>
</template>

<script>
import imgMetadata from "../assets/data/content.json";
import ImgModal from "@/components/ImgModal";

export default {
  name: "ImgGallery",

  components: {
    ImgModal,
  },

  data() {
    return {
      galleryData: this.importAllImagesWithMetaData(),

      // Modal info storage:
      viewModal: false,
      currentIndex: null,
      modalTitle: "",
      modalDescription: "",
      modalImageLink: "",
    };
  },

  methods: {
    importAllImages() {
      const context = require.context(
        "../../public/img/galleryImg",
        false, // don't include subdirectories
        /\.(png|jpe?g|svg)$/
      );
      return context.keys().map(context);
    },

    importAllImagesWithMetaData() {
      const images = this.importAllImages();
      const metadata = imgMetadata.galleryImgData;
      return images.map((image, index) => ({
        image,
        title: metadata[index]?.title || "Default Title",
        description: metadata[index]?.description || "Default Description",
      }));
    },

    onClickShowModal(e) {
      const targetIndex = e.target.id;
      this.currentIndex = targetIndex;
      this.viewModal = true;
      document.body.classList.add("scroll-disabled");

      this.modalTitle =
        imgMetadata.galleryImgData[targetIndex]?.title || "Default Title";
      this.modalDescription =
        imgMetadata.galleryImgData[targetIndex]?.description ||
        "Default Description";
      this.modalImageLink = this.importAllImages()[targetIndex];
    },

    onClickCloseModal() {
      this.viewModal = false;
      document.body.classList.remove("scroll-disabled");
      this.modalTitle = "";
      this.modalDescription = "";
      this.modalImageLink = "";
    },

    onClickNextImage() {
      if (this.currentIndex + 1 >= this.galleryData.length) {
        this.currentIndex = 0;
        this.updateModalImage();
      } else {
        this.currentIndex++;
        this.updateModalImage();
      }
    },

    onClickPrevImage() {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.galleryData.length - 1;
        this.updateModalImage();
      } else {
        this.currentIndex--;
        this.updateModalImage();
      }
    },

    updateModalImage() {
      this.modalTitle =
        imgMetadata.galleryImgData[this.currentIndex]?.title || "Default Title";
      this.modalDescription =
        imgMetadata.galleryImgData[this.currentIndex]?.description ||
        "Default Description";
      this.modalImageLink = this.importAllImages()[this.currentIndex];
    },
  },
};
</script>
