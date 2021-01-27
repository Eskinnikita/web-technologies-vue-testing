<template>
  <div>
    <p data-testid="message">{{ message }}</p>
    <button data-testid="toggle-message" @click="toggleMessage">
      ChangeMessage
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "default message"
    };
  },
  methods: {
    toggleMessage() {
      this.message = this.message === "message" ? "toggled message" : "message";
    }
  }
};
</script>

<style scoped>

</style>