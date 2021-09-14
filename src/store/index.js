import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings'
import user from './modules/user'
import quote from './modules/quote'
import card from './modules/card'


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    settings,
    user,
    quote,
    card
  }
})
