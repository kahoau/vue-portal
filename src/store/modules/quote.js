import * as types from '../mutation-types'

import {
    retrieveQuotes
} from '@/api/application'

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
            const quotes = await retrieveQuotes('quotes-month-' + monthIdx + '.json');
            commit(types.SET_QUOTES, await quotes.data)
        }
    },
    getters: {
        getQuotes(state) {
            return state.quotes
        }
    }
}
