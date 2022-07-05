export const state = ()=>({
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
  	},
})


export const getters = {
	getUser(state){
		return state.user
	}
}