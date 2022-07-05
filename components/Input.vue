<template>
	<input v-bind:type="type" v-bind:value="defaultValue" class="p-4 w-full bg-gray-100 text-gray-800 text-xl border-2 border-gray-200 rounded-lg outline-none transition-all focus:border-blue-500 "@input="updateValue($event)">
</template>

<script>
export default {

  name: 'Input',

  data () {
    return {

    }
  },
  methods:{
    updateValue($event){
      this.$emit('input', $event.target.value)
    }
  },
  props: {
  	type: String,
  	defaultValue: {
  		type: String,
  		default: ''
  	}
  }
}
</script>

<style lang="css" scoped>
</style>