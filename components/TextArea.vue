<template>
	<textarea class="p-4 h-64 w-full bg-gray-100 text-lg text-gray-800 border-2 border-gray-200 rounded-lg outline-none transition-all focus:border-blue-500" @input="updateValue($event)"></textarea>
</template>

<script>
export default {

  name: 'TextArea',

  data () {
    return {

    }
  },
  methods:{
    updateValue($event){
      this.$emit("input", $event.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>