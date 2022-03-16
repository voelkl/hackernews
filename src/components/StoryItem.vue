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
    newsItem.value = data;
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
    <img
      class="mr-2 icon"
      width="24"
      :src="
        'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
        newsItem.url
      "
    />
    <a class="is_5 link" :href="newsItem.url" target="_blank" rel="noopener">
      {{ newsItem.title }}
    </a>
    <div class="details">
      <p v-if="newsItem.title">
        {{ newsItem.score }} points by {{ newsItem.by }}
        {{ moment(newsItem.time * 1000).fromNow() }}
      </p>
      <p v-else>loading</p>
    </div>
  </div>
</template>
