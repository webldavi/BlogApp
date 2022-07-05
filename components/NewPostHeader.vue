<template>
	<div class="w-11/12 sm:w-128 h-max flex flex-row items-center justify-between gap-2">
      <span class="text-xl text-gray-800">Está pensando em algo?</span>
      <Button text="Novo Post" v-bind:click="redirectToNewPost"/>
    </div>
</template>

<script>
export default {

  name: 'NewPostHeader',

  data () {
    return {

    }
  },
  methods:{
    redirectToNewPost(){
      this.$store.$router.push('/feed/post/new');
    }
  }
}
</script>

<style lang="css" scoped>
</style>