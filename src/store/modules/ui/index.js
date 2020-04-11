export default {
  namespaced: true,
  state: {
    view: null,
    lastQuestion: false,
    focus: false
  },
  actions: {
    setFocus: ({ commit }, payload) => commit('SET_FOCUS', payload),
    setView: ({ commit }, payload) => commit('SET_VIEW', payload),
    setShowQuest:({ commit }, payload) => commit('SET_SHOW_QUEST', payload),
    setShowResult:({ commit }, payload) => commit('SET_SHOW_RESULT', payload),
    setShowLastQuestion:({ commit }, payload) => commit('SET_SHOW_LAST_QUESTION', payload),
  },
  mutations: {
    SET_FOCUS: (state, payload) => { state.focus = payload.data },
    SET_VIEW: (state, payload) => { state.view = payload.data },
    SET_SHOW_LAST_QUESTION: (state, payload) => { state.lastQuestion = payload.data },
    SET_SHOW_QUEST: () => {},
    SET_SHOW_RESULT: () => {}
  },
  getters: {
    getFocus: state => state.focus,
    getView: state => state.view,
    getShowLastQuestion: state => state.lastQuestion
  }
}
