<template>
  <div class="gallery-container">
    <h3 class="gallery-header section-header">{{ header }}</h3>
    <div class="img-gallery">
      <div
        v-for="(item, index) in galleryData"
        :key="index"
        class="gallery-item"
      >
        <h4 class="gallery-item-header">{{ item.title }}</h4>
        <img
          @click="onClickShowModal"
          :src="item.thumbnail"
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
import data from "../assets/data/content.json";
import ImgModal from "@/components/ImgModal";

export default {
  name: "ImgGallery",

  components: {
    ImgModal,
  },

  data() {
    return {
      header: data.imgGallery.header,
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

    importAllImagesWithMetaData() {
      const thumbnails = this.importAllThumbnails();
      const images = this.importAllImages();
      const metadata = data.imgGallery.galleryImgData;

      return images.map((image, index) => ({
        image,
        thumbnail: thumbnails[index],
        title: metadata[index]?.title || "Default Title",
        description: metadata[index]?.description || "Default Description",
      }));
    },

    onClickShowModal(e) {
      const targetIndex = e.target.id;
      this.currentIndex = targetIndex;
      this.viewModal = true;
      // document.body.classList.add("scroll-disabled");
      this.updateModalData(targetIndex);
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
        this.updateModalData(this.currentIndex);
      } else {
        this.currentIndex++;
        this.updateModalData(this.currentIndex);
      }
    },

    onClickPrevImage() {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.galleryData.length - 1;
        this.updateModalData(this.currentIndex);
      } else {
        this.currentIndex--;
        this.updateModalData(this.currentIndex);
      }
    },

    updateModalData(index) {
      this.modalTitle =
        data.imgGallery.galleryImgData[index]?.title || "Default Title";
      this.modalDescription =
        data.imgGallery.galleryImgData[index]?.description ||
        "Default Description";
      this.modalImageLink = this.importAllImages()[index];
    },
  },
};
</script>
