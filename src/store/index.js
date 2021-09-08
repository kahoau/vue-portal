import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    userProfile: null,
    cards: []
  },
  mutations: {
    SET_USER_PROFILE(state, val) {
      state.userProfile = val
    },
    SET_CARDS(state, cards) {
      state.cards = cards;
    }
  },
  actions: {
    async fetchCards({ commit }) {
      const cards = await fetch("cards.json");
      commit('SET_CARDS', await cards.json())
    },
    login({ dispatch }, form) {
      if (form.emailLogin === "" || form.passwordLogin === "") {
        return false;
      }

      // fetch user profile and set in state
      dispatch('fetchUserProfile', form)
    },
    async fetchUserProfile({ commit }, user) {
      // set user profile in state
      commit('SET_USER_PROFILE', {"username" : "admin"})

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        await router.push('/')
      }
    },
    async logout({ commit }) {
      // clear user data from state
      commit('SET_USER_PROFILE', null)

      // redirect to login view
      await router.push('/')
    },
  },
  getters: {
    getUserProfile(state) {
      return state.userProfile
    },
    getCards(state) {
      return state.cards
    }
  }
})

export default store
