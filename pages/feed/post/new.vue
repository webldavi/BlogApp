<template>
	<div class="w-full min-h-screen flex items-center justify-center px-2 py-4">

		<div class="w-full sm:w-128 h-max flex flex-col items-center justify-center flex-wrap rounded-md shadow p-2 gap-2">
			<h1 class="text-3xl text-gray-800">Nova Postagem</h1>
			<div class="w-full flex flex-row flex-wrap gap-2">
				<div class="w-full flex flex-col gap-1">
					<span class="text-xl text-gray-800">Titulo:</span>
					<Input type="text" placeholder="Escolha um Titulo"/>
				</div>
				<div class="w-full h-max flex flex-col ga-2">
					<span class="text-xl text-gray-800">Hashtags:</span>
					<div class="flex flex-row flex-wrap py-2 gap-2 px-2">
						<Tag v-for="(tag, index) in tags" v-bind:key="index">
							<div class="flex flex-row gap-3 w-full">
								<button @click="removeTag(tag.id)" class="font-bold text-red-500">[x]</button>
								<span>{{tag.tag}}</span>
							</div>
						</Tag>
					</div>
					<p class="font-bold text-red-400" v-if="alertActive">Você não pode adicionar Hashtags vazias ou com espaços!</p>
					<div class="flex flex-row gap-2">
						<Input type="text" defaultValue="#" v-model="currentTagInInput"/>
						<Button text="Adicionar" v-bind:click="addTag"/>
					</div>
				</div>
			</div>
			<div class="w-full flex flex-row flex-wrap gap-2">
				<div class="w-full flex flex-col gap-1">
					<span class="text-xl text-gray-800">Seu Texto:</span>
					<TextArea placeholder="Escreva o que está pensando" v-model="text"/>
				</div>
			</div>
			<div class="w-full h-max">
				<input class="w-full py-2 flex items-center cursor-pointer bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:border-transparent text-sm rounded pl-2" aria-describedby="user_avatar_help" id="user_avatar" type="file">
			</div>
			<div class="w-full h-max flex flex-row items-center justify-between gap-4">
				<Button text="Cancelar" v-bind:click="cancelPost" theme="bg-red-400 text-gray-800 hover:bg-red-500"/>
				<Button text="Postar" v-bind:click="cancelPost" theme="bg-green-400 text-gray-800 hover:bg-green-500"/>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {

  name: 'new',

  data () {
    return {
    	tags: [],
    	currentTagInInput: '#',
    	text: '',
    	alertActive: false
    }
  },
  methods:{
  	addTag(){
  		if(this.currentTagInInput == '#'){
  			this.alertActive = true
  			setTimeout(()=>{this.alertActive = false}, 5000)
  		}else{
  			if(this.currentTagInInput.split(' ').length == 1){
  				this.tags.push({tag: this.currentTagInInput, id: Date.now()})
  			}else{
  				this.alertActive = true
  				setTimeout(()=>{this.alertActive = false}, 5000)
  			}
  		}
  	},
  	removeTag(tagId){
  		this.tags = this.tags.filter(tag=>{
  			return tag.id != tagId
  		})
  	},
  	cancelPost(){
  		this.$store.$router.push('/feed');
  	}
  }
}
</script>

<style lang="css" scoped>
</style>