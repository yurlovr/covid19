import Vue from 'vue'
import Vuex from 'vuex'
import engineModule from './modules/engine'
import uiModule from './modules/ui'
import questModule from './modules/quest'
import stateContoller from './controllers/stateController'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    engine: engineModule,
    ui: uiModule,
    quest: questModule
  },
  plugins:[
    stateContoller()
  ]
})
