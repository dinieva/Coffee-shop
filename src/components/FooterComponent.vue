<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <list-item-component
              :link="links.footer.link"
              classItem="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </list-item-component>

            <list-item-component
              v-for="link in links.other"
              :key="link.id"
              :text="link.text"
              :link="link.link"
              classItem="footer__item"
            ></list-item-component>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import ListItemComponent from "@/components/ListItemComponent.vue";

export default {
  components: { ListItemComponent },

  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>
