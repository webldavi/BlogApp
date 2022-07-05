export const state = ()=>({
	posts: [
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
      author: {
        name: "Luis Davi",
        avatar_url: 'https://randomuser.me/api/portraits/men/27.jpg',
        bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
      },
      date: "25/07/22",
      id: "151848738484"
    },
  ],
	
})


export const getters = {
  getPosts(state){
    return state.posts
  }
}