<template>
	<div class="w-full md:w-132 lg:w-142 h-max flex flex-col gap-2 break-words px-2">
		<p class="break-words text-justify text-lg font-gray-800">{{post.text}}</p>
		<div class="w-full h-max flex flex-col">
			<span class="text-xl font-bold text-gray-800">Hashtags: </span>

			<div class="w-full flex flex-row flex-wrap gap-2 pt-2">
				<Tag v-for="(tag, index) in post.tags" :key="index">
					{{tag}}
				</Tag>
			</div>
		</div>
		<div class="flex flex-col gap-2 w-full">
			<span class="text-xl font-bold text-gray-800">Author: </span>
			<Author v-bind:author="post.author"/>
		</div>
		<Liked/>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ContentPost',
  computed:{
  	...mapGetters({
  		post: 'post/getCurrentPostInFocus'
  	})
  },
  	
}
</script>

<style lang="css" scoped>
</style>