<script setup lang="ts">
import { onMounted, ref } from "vue";
import ApiService from "../api_service";

const api_service = new ApiService();

const props = defineProps<{
  item: number;
}>();

let newsItem: ref<object> = ref({});

const getNewsItemFromApi = (item: number) => {
  api_service.getItem(item).then((data) => {
    console.log(data);
    newsItem.value = data;
  });
};
onMounted(() => {
  getNewsItemFromApi(props.item);
});
</script>

<template>
  <div>
    <h4>{{ newsItem.title }}</h4>
    <p>{{ newsItem.text }}</p>
  </div>
</template>
