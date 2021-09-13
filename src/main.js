import Vue from 'vue'
import App from './App.vue'
import i18n from './locales/i18n'
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMeta)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export let app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
