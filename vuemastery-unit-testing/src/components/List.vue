<template>
  <ul>
    <li data-testid="list-item" v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style scoped>

</style>