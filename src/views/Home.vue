<script setup lang="ts">
import { onMounted } from 'vue';

import { useTest } from '@/pinia/test';
import { storeToRefs } from 'pinia';

const test = useTest();
const { piniaTest, testTest } = useTest();

const { state } = storeToRefs(test);

onMounted(() => {
  piniaTest();

  testTest();
});
</script>

<template>
  <div>
    Home
    <h2>{{ state.name }}</h2>
    <h2>{{ state.age }}</h2>
  </div>
</template>

<style scoped></style>
