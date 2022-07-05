export const state = () => ({post: {}})

export const mutations = {
    async updatePostState(state, payload) {
        state.post = payload
        await this.$router.push(`/feed/post/${
            payload.id
        }`)
    }
}

export const actions = {
    updatePostInFocus(context, payload) {
        context.commit('updatePostState', payload)

    }
}

export const getters = {
    getCurrentPostInFocus(state) {
        return state.post
    }
}
