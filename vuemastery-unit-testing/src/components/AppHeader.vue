<template>
  <div>
    <button class="logout-button" v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style scoped></style>
