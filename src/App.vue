<script setup lang="ts">
import { onMounted, ref } from "vue";
import StoriesOverview from "./components/StoriesOverview.vue";
import ApiService from "./api_service";

let stories: ref<object> = ref();

onMounted(() => {
  const api_service = new ApiService();
  api_service.getTopStories().then((data) => {
    stories.value = data;
  });
});
</script>

<template>
  <div class="container">
    <h1 class="title is-1 mt-5">Hackernews</h1>
    <StoriesOverview :stories="stories" />
  </div>
</template>
