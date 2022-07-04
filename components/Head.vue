<template>
	<div class="w-full h-max flex flex-col">
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qetXQyPTO9q3uPfbe30EuJ9kc3vMco20ZQ&usqp=CAU" class="w-full h-64 rounded-md">
		<div class="px-4">
			<div class="w-full h-28 flex flex-row gap-2 p-2 bg-white rounded-md -mt-8 items-center shadow">
				<img src="https://randomuser.me/api/portraits/men/27.jpg" height="96px" width="96px" class="rounded-md">
				<div class="h-full flex flex-col items-start justify-between gap-2 truncate">
					<span class="text-3xl text-gray-700 truncate">Luis Davi</span>
					<Button text="Seguir"/>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {

  name: 'Head',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>