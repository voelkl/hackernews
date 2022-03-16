<script setup lang="ts">
import { onMounted, ref } from "vue";
import ApiService from "../api_service";
import moment from 'moment'

const api_service = new ApiService();

const props = defineProps<{
  item: number;
}>();

let newsItem: ref<object> = ref({});

const getNewsItemFromApi = (item: number) => {
  api_service.getItem(item).then((data) => {
    newsItem.value = {
      ...data,
      time: new Date(data.time * 1000),
    };
  });
};
onMounted(() => {
  if (props.item) {
    getNewsItemFromApi(props.item);
  }
});
</script>

<template>
  <div class="news-item card-content">
    <a :href="newsItem.url" target="_blank" rel="noopener">
      <h4>{{ newsItem.title }}</h4>
    </a>
    <div class="">
      <p v-if="newsItem">
        {{ newsItem.score }} points by {{ newsItem.by }}
        {{ moment(newsItem.time).fromNow() }}
      </p>
      <p v-else>loading</p>
    </div>
  </div>
</template>
