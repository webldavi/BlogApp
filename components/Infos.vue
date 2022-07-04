<template>
	<div class="w-72 h-max hidden lg:flex flex-col pl-4 gap-2 ">
		<span class="text-xl">Algumas Informações:</span>
		<div class="h-max w-full flex flex-col gap-2 ">
			<span class="text-lg text-gray-500">Hashtags seguidas:</span>
			<div class="w-full h-max flex flex-row flex-wrap gap-2">
				<Tag v-for="(item, index) in user.hashtags.slice(0, 7)" v-bind:key="index">{{item}}</Tag>
			</div>
		</div>

		<div class="h-max w-full flex flex-col gap-2">
			<span class="text-lg text-gray-500">Autores seguidos:</span>
			<div v-for="author in user.authors" class="w-full h-max transition-all cursor-pointer flex flex-row items-center gap-2 border-b-2 border-blue-200 hover:bg-blue-200">
			 <img src="https://randomuser.me/api/portraits/men/27.jpg" height="32px" width="32px">
			 <span>{{author}}</span>
			</div>
		</div>
    </div>
</template>

<script>
export default {

  name: 'Infos',

  data () {
    return {

    }
  },
  props:['user'],
  mounted(){
  	console.log(this.user)
  }
}
</script>

<style lang="css" scoped>
</style>