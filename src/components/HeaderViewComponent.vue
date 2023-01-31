<template>
  <h1 :class="classItem">{{ header }}</h1>
</template>

<script>
export default {
  props: {
    header: {
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