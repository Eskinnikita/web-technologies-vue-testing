export default {
  state() {
    return {
      salad: []
    }
  },

  mutations: {
    ADD_INGREDIENT(state, ingredient) {
      state.salad.push(ingredient)
    }
  },

  actions: {
    addIngredient({ commit }, ingredient) {
      commit('ADD_INGREDIENT', ingredient)
    }
  }
}
