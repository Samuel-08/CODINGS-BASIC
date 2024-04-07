<template>
  <div>
    Ini adalah komponen user
    <div v-if="error">{{ error }}</div>
    {{ userDataSamuel }}
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const userDataSamuel = ref("");
    const error = ref(null);

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        userDataSamuel.value = "Samuel";
      } catch (e) {
        error.value = e.message;
      }
    };

    onMounted(fetchData);
    onUnmounted(() => {
      // Lakukan pembersihan jika diperlukan
    });

    return { userDataSamuel, error };
  },
};
</script>
