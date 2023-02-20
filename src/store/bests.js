const bests = {
    state: {
        best: [],
    },
    mutations: {
        setBestsellersData(state, data) {
            state.best = data
        }
    },
    actions: {
        setBestsellersData({ commit }, data) {
            commit('setBestsellersData', data)
        }
    },
    getters: {
        getBests(state) {
            return state.best
        }
    }

}

export default bests