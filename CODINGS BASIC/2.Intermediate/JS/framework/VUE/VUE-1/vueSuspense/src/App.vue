<template>
  <div>
    Ini adalah komponen home
    <div v-if="error">{{ error }}</div>
    <Suspense>
      <template #default>
        <div>
          <div>
            <User />
          </div>
          <div>
            <User2 />
          </div>
        </div>
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { Suspense } from "vue";
import User from "./components/User.vue";
import User2 from "./components/User2.vue";

export default {
  components: { User, User2, Suspense },
  setup() {
    // ...
  },
};
</script>
