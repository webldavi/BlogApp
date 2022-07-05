<template>
  <div class="min-h-screen w-full flex flex-col justify-between items-center">
      <nav
        class="w-full h-12 bg-blue-500 flex flex-row items-center justify-between pl-4 pr-12 gap-2" v-if="currentPage"
      >
        <div class="w-max h-max flex items-center justify-center">
          <BackButton/>
        </div>
        <NuxtLink to="/feed">
          <h1 class="text-3xl text-white font-bold">BlogApp</h1>
        </NuxtLink>
      </nav>
      <nav
        class="w-full h-12 bg-blue-500 flex items-center justify-center" v-if="currentPage == false"
      >
        <NuxtLink to="/feed">
          <h1 class="text-3xl text-white font-bold">BlogApp</h1>
        </NuxtLink>
      </nav>
      <Nuxt/>
      <footer class="w-full h-max p-2  bg-gray-200 flex flex-col sm:flex-row sm:gap-4 justify-center items-center text-sm font-normal">
          <div class="flex flex-col items-center justify-center">
            <span>BlogApp © 2022</span>
            <span>Todos os direitos reservados</span>
          </div>
          <div class="flex flex-col items-center justify-center">
            <span>Recursos por <strong>Flaticon</strong></span>
            <span>Desenvolvido com 💙 por Luis Davi</span>
          </div>
      </footer>
  </div>

</template>

<script>
export default {
  computed:{
    currentPage(){
      return (this.$route.name != 'index' && this.$route.name != 'feed') ? true : false
    }
  }
};
</script>

<style></style>
