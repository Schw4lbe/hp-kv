<template>
  <section class="section-contact-container">
    <div class="section-contact-background">
      <h3 class="section-contact-header">dummy header contact</h3>
      <div class="section-contact-engage">
        <!-- 
        Display cellphone and email.
        make only available after clicking on "get in touch button".
        captcha request to show details for data safety.
        create own captcha to avoide cookie warning.
        -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
};
</script>

<style scoped>
/* temp styling for build */
.section-contact-container {
  min-height: 300px;
  width: 100%;
  border: 1px solid white;
}
</style>
