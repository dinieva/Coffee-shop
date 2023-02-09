<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <list-item-component :link="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </list-item-component>

      <list-item-component
        v-for="link in links.other"
        :key="link.id"
        :text="link.text"
        :link="link.link"
        classItem="header__item"
      ></list-item-component>
    </ul>
  </header>
</template>

<script>
import ListItemComponent from "@/components/ListItemComponent.vue";

export default {
  components: { ListItemComponent },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>
