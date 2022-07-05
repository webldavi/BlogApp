<template>
	<div v-if="loading" class="h-screen w-full flex flex-col gap-4 items-center justify-center fixed top-0 left-0 bg-white bg-opacity-80">
		<div class="w-12 h-12 border-dashed border-8 border-blue-500 animate-spin"></div>
		<span class="text-3xl text-gray-700">Carregando...</span>
	</div>
</template>

<script>
export default {

  name: 'Loading',

  data () {
    return {
    	loading: false
    }
  },
  methods:{
  	start(){
  		this.loading = true
  	},
  	finish(){
  		this.loading = false
  	}
  }
}
</script>

<style lang="css" scoped>
</style>