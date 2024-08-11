<template>
  <section class="section-service-container">
    <h3 class="section-service-header">dummy header service</h3>
    <div class="section-service-items">
      <div
        v-for="(item, index) in serviceContent"
        :key="index"
        class="service-item"
      >
        <h4 class="service-item-header">{{ item.header }}</h4>
        <p class="service-item-description">{{ item.description }}</p>
      </div>

      <!-- 
        potential for own components.
        consider tiny animations.
        telling a story for each service example.
        -->
    </div>
  </section>
</template>

<script>
import data from "../assets/data/content.json";

export default {
  name: "ServiceSection",

  data() {
    return {
      serviceContent: data.serviceItemData,
    };
  },
};
</script>
