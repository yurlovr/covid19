import { SCENARIOS } from '../const/const'
export default {
  [SCENARIOS.MAIN]: [
    { name: 'ui/setView', options: SCENARIOS.MAIN },
    { name: 'quest/setResult', options: null },
    { name: 'quest/setGroup', options: null }
  ],
  [SCENARIOS.QUESTIONS]: [
    { name: 'ui/setView', options: SCENARIOS.QUESTIONS },
  ],
  [SCENARIOS.RESULT]: [
    { name: 'ui/setView', options: SCENARIOS.RESULT },
  ],
}
