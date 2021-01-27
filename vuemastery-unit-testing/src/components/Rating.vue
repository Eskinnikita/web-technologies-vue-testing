<template>
  <div>
    <ul>
      <li
        v-for="(star, index) in maxStars"
        :key="index"
        class="star"
        :class="{ active: star <= initialGrade }"
      >
      </li>
    </ul>
    <div class="summary">{{initialGrade}} of {{maxStars}}</div>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number,
      default: 5
    },
    initialGrade: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>

</style>