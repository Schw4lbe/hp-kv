<template>
  <div v-if="popupVissible === true" class="contact-popup-container">
    <div class="contact-popup">
      <button class="close-popup">close</button>
      <div class="contact-popup-content">
        <h3 class="contact-popup-header">dummy popup header</h3>
        <p class="contact-popup-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit incidunt
          cupiditate laudantium, atque debitis consequuntur velit, at
          repellendus architecto in sequi pariatur culpa autem modi commodi
          sapiente optio quos voluptates!
        </p>
        <button class="contact-btn">go to contact</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPopup",

  data() {
    return {
      popupVissible: false,
    };
  },
};
</script>
