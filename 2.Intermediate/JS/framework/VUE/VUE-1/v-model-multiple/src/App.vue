<template>


    <pre>{{ name }}</pre>
    <pre>{{ age }}</pre>

</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const name = ref("");
        const age = ref(0);
        return { name, age };
    }
};
</script>

<style></style>