import { SCENARIOS } from '../const/const'
export default {
  [SCENARIOS.MAIN]: [
    { name: 'ui/setView', options: SCENARIOS.MAIN },
    { name: 'quest/setResult', options: null}
  ],
  [SCENARIOS.QUESTIONS]: [
    { name: 'ui/setView', options: SCENARIOS.QUESTIONS },
  ],
  [SCENARIOS.RESULT]: [
    { name: 'ui/setView', options: SCENARIOS.RESULT },
  ],
}
