import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './routes'
import http from './services/http'
import { store } from './store'
import { abilitiesPlugin } from '@casl/vue'
import ability from './plugins/ability'
import { confirmPlugin } from './plugins/confirm'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(confirmPlugin)
Vue.use(abilitiesPlugin, ability)

http.token = store.state.token
http.onError = (response) => {
  if (response.status === 403) {
    store.dispatch('forbidden', response)
    return true
  }

  if (response.status === 401) {
    store.dispatch('sessionExpired', response)
    return true
  }
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
