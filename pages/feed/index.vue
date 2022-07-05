<template>
  <div class="flex min-h-sceen w-full flex flex-col gap-4 pb-4 items-center">
    <Navigation page="feed"/>
  
    <div class="flex flex-row w-full h-max">

      <Infos v-bind:user="user"/>

      <div class="lg:flex-1 w-full flex flex-col gap-16 items-center justify-center">
        <NewPostHeader/>
        <div class="w-11/12 sm:w-128" v-for="(card, index) in cards" v-bind:key="index">

          <Card v-bind:data="card" />

        </div>
        <div class="w-80 break-words flex flex-col items-center justify-center gap-4" v-if="cards.lenght == 0">
          <img src="../../static/sem-resultados.png" height="128px" width="128px">
          <span class="text-3xl text-gray-600">Sem resultados!</span>
          <p class="text-lg text-gray-500">Você não tem resultados, click em <strong>"Hashtags"</strong> para seguir mais hashtags e obter resultados.</p>
        </div>

      </div>

    </div>

    <FloatButton/>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "FeedIndex",
  computed:{
    ...mapGetters({
      cards: 'posts/getPosts',
      user: 'user/getUser'

    })
  },
};
</script>