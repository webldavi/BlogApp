<template>
	<div class="w-full h-max p-2 flex flex-col items-center gap-8">
		<Head/>
		<ContentPost/>
	</div>
</template>

<script>
export default {

  name: 'postId',
  middleware: 'checkPost',
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>