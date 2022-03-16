<script setup lang="ts">
import StoryItem from "./StoryItem.vue";

const props = defineProps<{
  stories: ref<number[]>;
}>();
</script>

<template>
  <h2 class="title is-2 has-text-centered">Stories</h2>
  <ul>
    <li class="card" v-for="item in props.stories" :key="item">
      <StoryItem :item="item" />
    </li>
  </ul>
</template>
