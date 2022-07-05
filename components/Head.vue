<template>
	<div class="w-full md:w-132 lg:w-142 h-max flex flex-col gap-8 items-center">
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qetXQyPTO9q3uPfbe30EuJ9kc3vMco20ZQ&usqp=CAU" class="w-full h-64 lg:h-128 rounded-md">
		<div class="w-full flex items-center justify-center text-justify">
			<div class="w-full md:w-128 lg:w-138 h-28 flex flex-col gap-2 items-center">
				<span class="text-3xl text-gray-800">{{post.title}}</span>
				<span class="text-xl text-gray-600">{{post.author.name}} - {{post.date}}</span>
			</div>
		</div>
		
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'Head',

  data () {
    return {

    }
  },
  computed:{
  	...mapGetters({
  		post: 'post/getCurrentPostInFocus'
  	})
  }
}
</script>

<style lang="css" scoped>
</style>