import * as types from '../mutation-types'
import {retrieveCards} from "../../api/application";

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
            const cards = await retrieveCards('cards.json');
            commit(types.SET_CARDS, await cards.data)
        }
    },
    getters: {
        getCards(state) {
            return state.cards
        }
    }
}
