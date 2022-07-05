<template>
	<div class="w-full px-6 md:px-12 lg:px-24 flex flex-row items-center justify-between shadow" id="list">

		<div class="border-b-2 h-full pt-2 px-2 flex flex-col items-center center justify-center border-transparent transition-all cursor-pointer text-gray-800 hover:border-blue-500 hover:text-blue-500" id="nav-item" ref="feed" @click="toggleNavItem('feed')">

			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
			</svg>
			<span class="font-bold">Feed</span>
		</div>
		<div class="border-b-2 h-full pt-2 px-2 flex flex-col items-center center justify-center border-transparent transition-all cursor-pointer text-gray-800 hover:border-blue-500 hover:text-blue-500" id="nav-item" ref="hashtags" @click="toggleNavItem('hashtags')">

			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
			</svg>
			<span class="font-bold">Hashtags</span>
		</div>
		<div class="border-b-2 h-full pt-2 px-2 flex flex-col  items-center center justify-center border-transparent transition-all cursor-pointer text-gray-800 hover:border-blue-500 hover:text-blue-500" id="nav-item" ref="profile" @click="toggleNavItem('profile')">

			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span class="font-bold">Perfil</span>
		</div>
	</div>
</template>

<script>
export default {

	name: 'Navigation',

	data () {
		return {
			activeClass: ['active', 'border-blue-500', 'text-blue-500']
		}
	},
	props:{
		page: {
			type: String,
			default(){
				return 'feed'
			}
		}
	},
	mounted(){
		this.$refs[this.page].classList.add(...this.activeClass)
	},
	methods: {
	  toggleNavItem(itemRef) {
	    if(document.querySelector('.active')){
	    	document.querySelector('.active').classList.remove(...this.activeClass)
	    	this.$refs[itemRef].classList.add(...this.activeClass)
	    }else{
	    	this.$refs[itemRef].classList.add(...this.activeClass)
	    	
	    }
	  }
	},
}	
</script>
