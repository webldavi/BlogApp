<template>
  <div class="h-max w-full w-full flex flex-col gap-2 p-2 rounded-lg border-2 border-gray-200 shadow">
    <div class="flex flex-col gap-2">
      <div
        class="w-full h-64 rounded-md bg-cover bg-no-repeat bg-center bg-clip-border bg-scroll"
        v-bind:data-image="data.src"
        ref="cardImage"
      ></div>
      <div class="truncate w-full">
        <span class="text-xl font-bold">{{ data.title }}</span>
      </div>
      <div class="flex-1 w-full break-words text-gray-500" id="card-text">
        {{ data.text }}
      </div>
    </div>
    <div class="w-full h-max flex flex-row flex-wrap gap-2">
      <Tag v-for="(item, index) in data.tags.slice(0, 5)" v-bind:key="index">
        {{ item }}
      </Tag>
    </div>
    <div class="w-full flex flex-row items-center justify-between">
      <span class="text-gray-600">Por: {{data.author}} - {{data.date}}</span>
      <a v-bind:href="`/feed/post/${data.id}`" class="text-blue-500">[Saiba mais]</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
    },
  },
  mounted() {
    this.$refs.cardImage.style.backgroundImage = `url(${this.$refs.cardImage.dataset.image})`;
  },
};
</script>

<style>
#card-text {
  line-height: 1.5rem;
  max-height: calc(line-height * 5);
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
}
</style>
