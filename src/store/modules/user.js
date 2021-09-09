import Storage from '../../storage'
import * as types from '../mutation-types'
import router from '../../router/index'

export default {
    state: {
        userProfile: null
    },
    mutations: {
        [types.SET_USER_PROFILE] (state, data) {
            state.userProfile = data

            const username = (data && data.username) ? data.username : null;
            Storage.saveToSession('username', username)
        },
        [types.INITIALISE_STORE] (state) {
            if (Storage.getFromSession('username')) {
                state.userProfile = { 'username': Storage.getFromSession('username') }
            }
        }
    },
    actions: {
        async login({ dispatch, commit }, form) {
            if (form.username === "" || form.password === "") {
                return false;
            }

            // set user profile in state
            commit(types.SET_USER_PROFILE, {'username' : form.username})

            // change route to dashboard
            if (router.currentRoute.path === '/login') {
                await router.push('/')
            }
        },
        async logout({ commit }) {
            // clear user data from state
            commit(types.SET_USER_PROFILE, null)
            Storage.removeFromSession('username')

            // redirect to login view
            if (router.currentRoute.path !== '/') {
                await router.push('/')
            }
        }
    },
    getters: {
        getUserProfile(state) {
            return state.userProfile
        }
    }
}
