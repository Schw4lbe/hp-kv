<template>
  <section class="section-service-container" id="section2">
    <h3 class="section-service-header">dummy header service</h3>
    <div class="section-service-items">
      <div
        v-for="(item, index) in serviceContent"
        :key="index"
        class="service-item"
      >
        <div class="service-content-container">
          <h4 class="service-item-header">{{ item.header }}</h4>
          <p class="service-item-description">{{ item.description }}</p>
        </div>
        <!-- later on img render on loop like in gallery -->
        <div class="dummy-img-container">
          <img class="dummy-img" :src="dummy" alt="dummy" />
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="section-service-separator"></div> -->
</template>

<script>
import data from "../assets/data/content.json";
import dummyImg from "../../public/img/serviceImg/serviceimg01.png";

export default {
  name: "ServiceSection",

  data() {
    return {
      serviceContent: data.serviceSection.itemData,
      dummy: dummyImg,
    };
  },
};
</script>
