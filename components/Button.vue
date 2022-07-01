<template>
  <button v-bind:class="`p-2 h-max transition-all bg-blue-500 hover:bg-blue-700 text-white rounded shadow ${width}`">
      <span class="text-xl">{{text}}</span>
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        width: String
    }
};
</script>

<style></style>
