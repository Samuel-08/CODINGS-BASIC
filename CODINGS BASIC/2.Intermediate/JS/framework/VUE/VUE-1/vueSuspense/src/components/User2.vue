<template>
  <div>
    Ini adalah komponen user
    <div v-if="error">{{ error }}</div>
    {{ userDataGanteng }}
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const userDataGanteng = ref("");
    const error = ref(null);

    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        userDataGanteng.value = "Ganteng";
      } catch (e) {
        error.value = e.message;
      }
    };

    onMounted(fetchData);
    onUnmounted(() => {
      // Lakukan pembersihan jika diperlukan
    });

    return { userDataGanteng, error };
  },
};
</script>
