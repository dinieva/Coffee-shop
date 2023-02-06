<template>
  <li :class="classItem">
    <router-link :to="link">
      {{ text }}
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      required: false,
      type: String,
    },
    icon: {
      required: false,
      type: String,
      //default: "coffee-3.jpg",
    },
    link: {
      required: true,
      type: String,
    },
    classItem: {
      required: true,
      type: String,
    },
  },
};
</script>