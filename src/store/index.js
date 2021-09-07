import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    cards: []
  },
  mutations: {
    SET_CARDS(state, cards) {
      state.cards = cards;
    }
  },
  actions: {
    async fetchCards({ commit }) {
      const cards = await fetch("cards.json");
      commit('SET_CARDS', await cards.json())
    }
  },
  getters: {
    getCards(state) {
      return state.cards;
    }
  }
})

export default store
