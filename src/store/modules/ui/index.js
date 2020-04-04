export default {
  namespaced: true,
  state: {
    view: null,
  },
  actions: {
    setView: ({ commit }, payload) => commit('SET_VIEW', payload),
    setShowQuest:({ commit }, payload) => commit('SET_SHOW_QUEST', payload),
    setShowResult:({ commit }, payload) => commit('SET_SHOW_RESULT', payload),
  },
  mutations: {
    SET_VIEW: (state, payload) => { state.view = payload.data },
    SET_SHOW_QUEST: () => {},
    SET_SHOW_RESULT: () => {}
  },
  getters: {
    getView: state => state.view
  }
}
