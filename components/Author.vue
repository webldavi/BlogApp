<template>
	<div class="w-full lg:w-128 h-max flex flex-row gap-4 items-center">
		<img v-bind:src="author.avatar_url" height="96px" width="96px" class="rounded-full">
		<div class="h-full w-full flex flex-col items-start justify-center gap-2 break-words" id="author-bio" >
			<span class="text-3xl text-gray-700 truncate">{{author.name}}</span>
			<p>{{author.bio}}</p>
		</div>
	</div>

</template>

<script>
export default {

  name: 'Author',

  data () {
    return {

    }
  },
  props:{
  	author: Object
  }
}
</script>

<style lang="css" scoped>

#author-bio {
  line-height: 1.5rem;
  max-height: calc(line-height * 5);
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  overflow: hidden !important;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
}
</style>