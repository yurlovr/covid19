import { QUESTIONS_PROMOBOT } from '../../const/questions'
import { STATE } from '../../const/const'
import getUserGroup from '../../libs/userGroup'
import sendResult from '../../libs/sendResult'

export default function () {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    let arrayIdQuestion = QUESTIONS_PROMOBOT.filter(i => i.id)
    // let result = null
    let testResult = null

    store.subscribe((mutation) => {
      let payload = mutation.payload
      const nextQuestion = (meta) => {
        if (arrayIdQuestion.length === 1) {
          dispatch('ui/setShowLastQuestion', {
            meta,
            data: true
          })
        }
        const question = arrayIdQuestion[0]
        if (arrayIdQuestion.length === 1) {
          dispatch('ui/setShowLastQuestion', {
            meta,
            data: true
          })
        }
        arrayIdQuestion = arrayIdQuestion.filter(item => item.id !== question.id)
        dispatch('quest/setCurrentQuest', {
          meta: payload.meta,
          data: question
        })
        if (getter['engine/getStateCurrent'] !== STATE.QUESTIONS) {
          dispatch('engine/clickMoveToState', {
            meta,
            data: STATE.QUESTIONS
          })
        }
      }

      switch (mutation.type) {
        case 'ui/SET_SHOW_QUEST':
            dispatch('quest/setQuest', {
              meta: payload.meta,
              data: QUESTIONS_PROMOBOT
            })
            nextQuestion(payload.meta)
          break
        case 'quest/SET_ANSWER_CURRENT_QUEST':
          dispatch('quest/setAllAnswers', {
            meta: payload.meta,
            data: getter['quest/getAllAnswers'].concat(payload.data)
          })
          break
          case 'quest/SET_ALL_ANSWERS':
            if (getter['quest/getAllAnswers'].length === QUESTIONS_PROMOBOT.length) {
              dispatch('ui/setShowResult', {
                meta: payload.meta
              })
              return
            }
            nextQuestion()
            break
          case 'ui/SET_SHOW_RESULT':
            testResult = getUserGroup(getter['quest/getAllAnswers'])
            console.log(testResult)
            dispatch('ui/setShowLastQuestion', {
              meta: payload.meta,
              data: false
            })
            sendResult(getter['quest/getAllAnswers'])
              dispatch('quest/setResult', {
                meta: payload.meta,
                data: testResult.result
              })
              dispatch('quest/setGroup', {
                meta: payload.meta,
                data: testResult.group
              })
              arrayIdQuestion = QUESTIONS_PROMOBOT.filter(i => i.id)
              dispatch('quest/setInitialState', {
                meta: payload.meta,
              })
              dispatch('engine/clickMoveToState', {
                meta: payload.meta,
                data: STATE.RESULT
              })
            break
      }
    })
  }
}
