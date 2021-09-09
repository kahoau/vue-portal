import Storage from '../../storage'
import { app } from '../../main'
import * as types from '../mutation-types'
import constants from '../../common/constants'

export default {
    state: {
        locale: Storage.getFromLocal('locale') || constants.locale.default
    },
    mutations: {
        [types.SET_LOCALE] (state, data) {
            app.$i18n.locale = data.locale
            state.locale = data.locale
            Storage.saveToLocal('locale', data.locale)
        }
    },
    actions: {
        setLocale({ dispatch, commit }, data) {
            commit(types.SET_LOCALE, {'locale' : data.locale})
        }
    },
    getters: {
        getLocale(state) {
            return state.locale
        }
    }
}
