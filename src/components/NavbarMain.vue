<template>
  <div class="navbar-container">
    <nav class="navbar navbar-expand-sm">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              menu mobile header
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav">
              <li
                v-for="(item, index) in navItemData"
                :key="index"
                class="nav-item"
              >
                <RouterLink
                  @click="onClickScrollIntoView(item.sectionId)"
                  to="/"
                  class="nav-link active"
                  :data-section="item.sectionId"
                  aria-current="page"
                >
                  <i :class="item.icon" class="nav-link-icon"></i>
                  <span class="nav-link-text">{{ item.title }}</span>
                  <RouterLink to="/"></RouterLink>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import data from "../../public/content.json";

export default {
  name: "NavbarMain",

  data() {
    return {
      navItemData: data.navbarMain,
    };
  },

  methods: {
    onClickScrollIntoView(sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement === null) {
        return;
      } else {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>
