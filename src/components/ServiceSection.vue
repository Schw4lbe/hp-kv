<template>
  <section class="section-service-container">
    <div class="section-service-background">
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
        some service items comming here. 
        potential for own components.
        consider tiny animations.
        telling a story for each service example.
        -->
      </div>
    </div>
  </section>
</template>

<script>
import serviceData from "../assets/content.json";

export default {
  name: "ServiceSection",

  data() {
    return {
      serviceContent: serviceData.serviceItemData,
    };
  },
};
</script>

<style scoped>
/* temp styling for build */
.section-service-container {
  min-height: 300px;
  width: 100%;
  border: 1px solid white;
}
</style>
