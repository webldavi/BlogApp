<template>
  <div
    class="w-full sm:flex-1 h-max flex flex-col gap-4 p-2 bg-white border border-gray-200 transition-all rounded-md shadow"
  >
    <div>
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

    <div >
      <label for="Rpassword" class="text-gray-800">Repita a senha!</label>
      <input
        type="password"
        name="Rpassword"
        placeholder="Repita a senha!"
        class="w-full h-12 transition-all px-2 border-2 border-blue-400 outline-none rounded focus:border-blue-700"
      />
    </div>
    <span>Deseja fazer Login? <a href="/" class="text-blue-500">Clique aqui</a></span>
    <Button text="Registrar" width="w-full"/>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      
    };
  },
};
</script>

<style></style>
