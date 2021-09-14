import * as types from '../mutation-types'

export default {
    state: {
        quotes: []
    },
    mutations: {
        [types.SET_QUOTES] (state, quotes) {
            state.quotes = quotes;
        }
    },
    actions: {
        async fetchQuotes({ commit }, monthIdx) {
            const quotes = await fetch('data/quotes/quotes-month-' + monthIdx + '.json');
            commit(types.SET_QUOTES, await quotes.json())
        }
    },
    getters: {
        getQuotes(state) {
            return state.quotes
        }
    }
}
