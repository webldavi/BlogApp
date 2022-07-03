<template>
  <div
    class="w-full sm:flex-1 h-max flex flex-col gap-4 p-2 bg-white transition-all rounded-md shadow"
  >
    <div v-if="registed == false">
      <label for="name" class="text-gray-800">Nome Completo:</label>
      <input
        type="text"
        name="name"
        placeholder="Seu nome aqui!"
        class="w-full h-12 transition-all px-2 border-2 border-blue-400 outline-none rounded focus:border-blue-700"
      />
    </div>

    <div>
      <label for="email" class="text-gray-800">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Seu email aqui!"
        class="w-full h-12 transition-all px-2 border-2 border-blue-400 outline-none rounded focus:border-blue-700"
      />
    </div>

    <div>
      <label for="password" class="text-gray-800">Senha:</label>
      <input
        type="password"
        name="password"
        placeholder="Sua senha aqui!"
        class="w-full h-12 transition-all px-2 border-2 border-blue-400 outline-none rounded focus:border-blue-700"
      />
    </div>

    <div v-if="registed == false">
      <label for="Rpassword" class="text-gray-800">Repita a senha!</label>
      <input
        type="password"
        name="Rpassword"
        placeholder="Repita a senha!"
        class="w-full h-12 transition-all px-2 border-2 border-blue-400 outline-none rounded focus:border-blue-700"
      />
    </div>

    <div>
      <label for="checkRegister" class="text-gray-800">Já é Registrado? </label>
      <input
        id="default-checkbox"
        name="checkRegister"
        type="checkbox"
        checked
        @click="checkRegister()"
        ref="checkbox"
      />
    </div>
    <Button v-bind:text="buttonText" width="w-full"/>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      registed: true,
      buttonText: 'Entrar',
      register: false
    };
  },
  methods: {
     checkRegister() {
      this.registed = this.$refs.checkbox.checked;
      if(this.registed === false){
          this.buttonText = 'Registrar'
          this.register = true
      }else{
          this.buttonText = 'Entrar'
          this.register = false
      }

    },
  },
};
</script>

<style></style>
