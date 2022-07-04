<template>
  <div class="min-h-screen w-full flex flex-col justify-between items-center">
      <nav
        class="w-full h-12 bg-blue-500 flex flex-row items-center justify-center"
      >
        <h1 class="text-3xl text-white font-bold">BlogApp</h1>
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
export default {};
</script>

<style></style>
