import Vue from 'vue'
import App from './App.vue'
import Vuex  from 'vuex'
import store from './store'
import vuetify from './plugins/vuetify';
import uuid from 'uuid'
import { STATE } from './const/const'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

store.dispatch('engine/moveToState', {
  meta: uuid(),
  data: STATE.MAIN
})