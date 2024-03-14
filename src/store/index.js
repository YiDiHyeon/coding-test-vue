import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart/index'
import wish from './wish/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    wish,
  },
  state: {},
  mutations: {},
  actions: {},
})
