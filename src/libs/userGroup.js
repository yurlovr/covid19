import { RESULT_PROMOBOT, GROUP } from '../const/result'

export default function getUserGroup (answers) {
  let result = null
  const temerature = +answers[0].answer === 1
  const spo = +answers[answers.length - 1].answer.replace('%', '')
  const arrayForAnalize = answers.filter((a, index) => index !== 0 && index !== answers.length - 1)
  const arrayTrueAnswers = arrayForAnalize.filter(a => +a.answer === 1)
  console.log('arrayTrueAnswers', arrayTrueAnswers)
  // 3 - группа один из 6, 7, 8
  if (arrayTrueAnswers.find(a => [6, 7, 8].includes(a.id))) {
    result = 3
  }
  //  первая группа есть температура  + один из 2, 3, 4, 5
  if (temerature &&
    (arrayTrueAnswers.find(a => [2, 3, 4, 5].includes(a.id)) || spo < 95)) {
    result = 1
  }
  // группа 2  - один из 6, 7, 8 && result === 1
  if (result === 1 && arrayTrueAnswers.find(a => [6, 7, 8].includes(a.id))) {
    result = 2
  }
  if (temerature && spo < 95 && arrayTrueAnswers.find(a => [6, 7, 8].includes(a.id))) {
    result = 2
  }

  // 4 группа нет контактов и температуры 6, 7, 8, 9
  if (!temerature && !arrayTrueAnswers.find(a => [6, 7, 8].includes(a.id))) result = 4
  return {result: getTextResult(result || 5, spo), group: getGroup(result || 5)}
}
function getTextResult(result, spo) {
  console.log('result',result)
  if (result === 4 && spo < 93) return RESULT_PROMOBOT.GOOD_NEED_MEDIC
  if (result === 4 && spo >= 93) return RESULT_PROMOBOT.VERY_GOOD
  if (result === 5) return RESULT_PROMOBOT.GOOD
  if (spo <= 93) return RESULT_PROMOBOT.NOT_GOOD
  // if (result === 3 && spo > 93) return RESULT_PROMOBOT.BAD
  // if (result !== 3 && spo > 93) return RESULT_PROMOBOT.BAD
  if (spo > 93) return RESULT_PROMOBOT.BAD
}
function getGroup(data) {
  return GROUP[data]
}