<template>
  <button v-bind:class="`p-2 h-max transition-all ${theme} rounded shadow ${width}`" @click="click()">
      <span class="text-xl">{{text}}</span>
  </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        width: String,
        click: Function,
        theme: {
          type: String,
          default: 'bg-blue-500 hover:bg-blue-700 text-white'
        }
    }
};
</script>

<style></style>
