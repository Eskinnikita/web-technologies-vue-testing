<template>
  <div>
    <p v-if="error" data-testid="message-error">{{ error }}</p>
    <p v-else data-testid="message">{{ message.text }}</p>
  </div>
</template>

<script>
import { getMessage } from "@/services/axios";

export default {
  async created() {
    try {
      this.message = await getMessage();
    } catch (err) {
      this.error = "Ooops! Something went wrong!";
    }
  },
  data() {
    return {
      message: {},
      error: null
    };
  }
};
</script>

<style scoped>

</style>