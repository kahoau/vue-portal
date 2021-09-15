import Vue from 'vue'
import App from './App.vue'
import i18n from './locales/i18n'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import constants from './common/constants'
import * as types from './store/mutation-types'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const setLocaleFromURL = (paramLocale, i18n, store) => {
    if (!paramLocale || !constants.locale.availableLocale.includes(paramLocale)) {
        return
    }

    i18n.locale = paramLocale
    store.commit(types.INITIALISE_STORE, paramLocale)
}

export let app = new Vue({
    store,
    i18n,
    render: h => h(App),
    router,
    beforeCreate() {
        setLocaleFromURL(this.$route.query.locale, i18n, this.$store)
    }
}).$mount('#app')
