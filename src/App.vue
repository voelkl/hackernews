<script setup lang="ts">
import { onMounted, ref } from "vue";
import StoriesOverview from "./components/StoriesOverview.vue";
import ApiService from "./api_service";

let stories: ref<number[]> = ref([]);

onMounted(() => {
  const api_service = new ApiService();
  api_service.getTopStories().then((data) => {
    stories.value = data;
  });
});
</script>

<template>
  <h1>Mostrador</h1>
  <StoriesOverview :stories="stories" />
</template>
