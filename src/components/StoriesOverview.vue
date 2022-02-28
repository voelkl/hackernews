<script setup lang="ts">
import StoryItem from "./StoryItem.vue";

const props = defineProps<{
  stories: ref<number[]>;
}>();
</script>

<template>
  <h1>Stories</h1>
  <ul class="list-disc hover:list-disc">
    <li v-for="item in props.stories" :key="item">
      <StoryItem :item="item" />
    </li>
  </ul>
</template>
