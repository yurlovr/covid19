import { QUESTIONS } from '../../const/questions'
import { STATE } from '../../const/const'
import { RESULT } from '../../const/result'
import randomInteger from '../../libs/randomInteger'
import sendResult from '../../libs/sendResult'

export default function () {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    let arrayIdQuestion = QUESTIONS.filter(i => i.id)
    let result = null

    store.subscribe((mutation) => {
      let payload = mutation.payload
      const nextQuestion = (meta) => {
        const randomIndex = randomInteger(0, arrayIdQuestion.length - 1)
        const question = arrayIdQuestion[randomIndex]
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
              data: QUESTIONS
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
            if (getter['quest/getAllAnswers'].length === QUESTIONS.length) {
              dispatch('ui/setShowResult', {
                meta: payload.meta
              })
              return
            }
            nextQuestion()
            break
          case 'ui/SET_SHOW_RESULT':
            result = getter['quest/getAllAnswers'].reduce((sum, current) => sum + +current.answer, 0);
            console.log(result)
            sendResult(getter['quest/getAllAnswers'])
            if (!result) {
              dispatch('quest/setResult', {
                meta: payload.meta,
                data: RESULT.VERY_GOOD
              })
            } else if (result < 4) {
              dispatch('quest/setResult', {
                meta: payload.meta,
                data: RESULT.GOOD
              })
            } else if (result >= 4 && result < 7 ) {
              dispatch('quest/setResult', {
                meta: payload.meta,
                data: RESULT.NOT_GOOD
              })
            } else {
              dispatch('quest/setResult', {
                meta: payload.meta,
                data: RESULT.BAD
              })
            }
              arrayIdQuestion = QUESTIONS.filter(i => i.id)
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
