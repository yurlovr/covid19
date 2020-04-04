import states from '../../states'
import scenarios from '../../scenarios'
import uuid from 'uuid'

export default {
  namespaced: true,
  state: {
    state: {
      previous: null,
      current: null,
      next: null,
      diff: null
    },
    states,
    scenarios
  },
  actions: {
    // handlers
    clickMoveToState: ({ state, dispatch }, payload) => {
      if (payload.data !== state.state.current) {
        dispatch('moveToState', {
          meta: uuid(),
          data: payload.data
        })
      }
    },
    moveToState: ({ state, dispatch }, payload) => {
      let currentState = state.states.find(s => s.name === state.state.current)
      let nextState = state.states.find(s => s.name === payload.data)
      if (currentState !== nextState) {
        // ...
        if (currentState) {
          // if ('leaving' in currentState && Array.isArray(currentState['leaving'])) {
          //   currentState['leaving'].forEach(action => {
          //     let timeout = (typeof action.timeout !== 'undefined') ? action.timeout : 0
          //     let enabled = (typeof action.enabled !== 'undefined') ? action.enabled : true
          //     if (enabled) {
          //       let timer = setTimeout(() => {
          //         dispatch(action.name, {
          //           meta: payload.meta,
          //           data: action.options
          //         }, { root: true })
          //       }, timeout)
          //       timeOut.insertTimer(timer)
          //     }
          //   })
          // }
          // ...
          dispatch('setStatePrevious', {
            meta: payload.meta,
            data: currentState.name
          })
        }
        if (nextState) {
          if ('entering' in nextState && Array.isArray(nextState['entering'])) {
            nextState['entering'].forEach(action => {
              let enabled = (typeof action.enabled !== 'undefined') ? action.enabled : true
              if (enabled) {
                  dispatch(action.name, {
                    meta: payload.meta,
                    data: action.options
                  }, { root: true })
                }
              })
          }
          dispatch('saveStateName', {
            meta: payload.meta,
            data: payload.data
          })
        }
      }
    },
    callScenario: ({ state, dispatch }, payload) => {
      let name = payload.data
      if (name in state.scenarios) {
        let scenario = state.scenarios[name]
        if (Array.isArray(scenario)) {
          scenario.forEach(item => {
            let enabled = (typeof item.enabled !== 'undefined') ? item.enabled : true
            if (enabled) {
                dispatch(item.name, {
                  meta: payload.meta,
                  data: item.options
                }, { root: true })
            }
          })
        }
      }
    },
    saveStateName: ({ state, dispatch }, payload) => {
        function getDiffByStates (current, next) {
          current = current.split('/')
          next = next.split('/')

          let length = Math.max(current.length, next.length)

          let outLevel = 0
          let outState = ''
          let inState = ''
          let parent = null
          let parents = []

          for (let i=0; i < length; i++) {
            outLevel = i
            if (current[i] !== next[i]) {
              outState = current[i]
              inState = next[i]
              if (i > 0) {
                parent = current[i-1]
                parents = current.slice(0, i)
              }
              break
            }
          }

          return {
            next,
            parent,
            parents,
            level: outLevel,
            out: outState,
            in: inState,
            prev: current,
          }
        }

        if (state.state.current && state.state.current !== payload.data) {
          let result = getDiffByStates(state.state.current, payload.data)

          dispatch('setStateDiff', {
            meta: payload.meta,
            data: result
          })
        }

        dispatch('setStateCurrent', payload)
    },
    // state
    setStatePrevious: ({ commit }, payload) => commit('SET_STATE_PREVIOUS', payload),
    setStateCurrent: ({ commit }, payload) => commit('SET_STATE_CURRENT', payload),
    setStateNext: ({ commit }, payload) => commit('SET_STATE_NEXT', payload),
    setStateDiff: ({ commit }, payload) => commit('SET_STATE_DIFF', payload),
  },
  mutations: {
    // state
    SET_STATE_PREVIOUS: (state, payload) => { state.state.previous = payload.data },
    SET_STATE_CURRENT: (state, payload) => { state.state.current = payload.data },
    SET_STATE_NEXT: (state, payload) => { state.state.next = payload.data },
    SET_STATE_DIFF:(state, payload) => { state.state.diff = payload.data }
  },
  getters: {
    // state
    getStatePrevious: (state) => state.state.previous,
    getStateCurrent: (state) => state.state.current,
    getStateNext: (state) => state.state.next,
    getStateDiff: (state) => state.state.diff
  }
}
