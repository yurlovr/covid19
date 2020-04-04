function initialState () {
  return {
    question: null,
    currentQuest: null,
    answerCurrentQuest: null,
    allAnswers: [],
  }
}

export default {
  namespaced: true,
  state: {
    ...initialState(),
    result: null
  },
  actions: {
    setInitialState: ({ commit }, payload) => commit('SET_INITIAL_STATE', payload),
    setQuest: ({ commit }, payload) => commit('SET_QUEST', payload),
    setCurrentQuest: ({ commit }, payload) => commit('SET_CURRENT_QUEST', payload),
    setResult: ({ commit }, payload) => commit('SET_RESULT', payload),
    setAnswerCurrentQuest: ({ commit }, payload) => commit('SET_ANSWER_CURRENT_QUEST', payload),
    setAllAnswers: ({ commit }, payload) => commit('SET_ALL_ANSWERS', payload),
  },
  mutations: {
    SET_INITIAL_STATE: (state) => {
      const s = initialState()
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    },
    SET_QUEST: (state, payload) => { state.question = payload.data },
    SET_CURRENT_QUEST: (state, payload) => { state.currentQuest = payload.data },
    SET_RESULT: (state, payload) => { state.result = payload.data },
    SET_ANSWER_CURRENT_QUEST: (state, payload) => { state.answerCurrentQuest = payload.data },
    SET_ALL_ANSWERS: (state, payload) => { state.allAnswers = payload.data },
  },
  getters: {
    getQuest: state => state.question,
    getCurrentQuest: state => state.currentQuest,
    getResult: state => state.result,
    getAnswerCurrentQuest: state => state.answerCurrentQuest,
    getAllAnswers: state => state.allAnswers,
  }
}
