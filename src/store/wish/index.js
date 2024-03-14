export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {},
  mutations: {
    addItem(state, item) {
      const wishItems = state.items.filter((wishItem) => wishItem.id === item.id)
      if (wishItems.length === 0) {
        state.items.push({
          ...item,
        })
      }
    },
    delItem(state, id) {
      state.items = state.items.filter((item) => item.id !== id)
    },
    clearCart(state) {
      state.items = []
    },
  },
  actions: {
    activeItem({ commit }, item) {
      commit('addItem', item)
    },
    addItem({ commit }, item) {
      commit('addItem', item)
    },
    delItem({ commit }, id) {
      commit('delItem', id)
    },
    clearWish({ commit }) {
      commit('clearWish')
    },
  },
}
