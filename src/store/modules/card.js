import * as types from '../mutation-types'

export default {
    state: {
        cards: []
    },
    mutations: {
        [types.SET_CARDS] (state, cards) {
            state.cards = cards;
        }
    },
    actions: {
        async fetchCards({ commit }) {
            const cards = await fetch('cards.json');
            commit(types.SET_CARDS, await cards.json())
        }
    },
    getters: {
        getCards(state) {
            return state.cards
        }
    }
}
