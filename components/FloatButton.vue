<template>
  <div class="h-max w-max hidden cursor-pointer fixed right-10 bottom-10 p-4 transition-all shadow-md rounded-full bg-opacity-80 bg-blue-200 " id="to-top" @click="backToTop()">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
    </svg>
  </div>
</template>

<script>
export default {

  name: 'FloatButton',

  data () {
    return {

    }
  },
  methods:{
    backToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  },
  mounted(){
    const toTop = document.querySelector("#to-top")
    window.addEventListener("scroll", ()=>{
      if(window.pageYOffset > 100){
        toTop.classList.remove('hidden')
        toTop.classList.add("flex")
      }else{
        toTop.classList.remove('flex')
        toTop.classList.add("hidden")
      }
    })
  }
}
</script>

