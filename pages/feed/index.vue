<template>
  <div class="flex min-h-sceen w-full flex flex-col gap-4 pb-4 items-center">
    <Navigation page="feed"/>
    <div class="flex flex-row w-full h-max">

      <Infos v-bind:user="user"/>

      <div class="lg:flex-1 w-full flex flex-col gap-16 items-center justify-center">

        <div class="w-11/12 sm:w-128" v-for="(card, index) in 1" v-bind:key="index">

          <Card v-bind:data="cards[0]" />

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
export default {
  name: "FeedIndex",
  data() {
    return {
      cards: [
        {
          title: "Titulo do post e mais alguma coisa",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qetXQyPTO9q3uPfbe30EuJ9kc3vMco20ZQ&usqp=CAU",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          tags: [
            "#hacker",
            "#programming",
            "#security",
            "#javascript",
            "#linux",
          ],
          author: "Luis Davi",
          date: "25/07/22",
          id: "151848738484"
        },
      ],
      user:{
        hashtags: [
          "#hacker",
          "#programming",
          "#security",
          "#javascript",
          "#linux",
          "#hacker",
          "#programming",
          "#security",
          "#javascript",
          "#linux",
        ],
        authors: [
          "Luis Davi",
          "Felipe Guilherme",
          "Lucas Henrique",
          "Pedro Gomes",
          "Luis Davi",
          "Felipe Guilherme",
          "Lucas Henrique",
          "Pedro Gomes",
        ]
      }
    };
  },
};
</script>