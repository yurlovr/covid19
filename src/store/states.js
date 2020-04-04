import { STATE, SCENARIOS } from '../const/const'

export default [
  {
    name: STATE.MAIN,
    entering: [
      { name: 'engine/callScenario', options: SCENARIOS.MAIN }
    ]
  },
  {
    name: STATE.QUESTIONS,
    entering: [
      { name: 'engine/callScenario', options: SCENARIOS.QUESTIONS }
    ]
  },
  {
    name: STATE.RESULT,
    entering: [
      { name: 'engine/callScenario', options: SCENARIOS.RESULT }
    ]
  },
  // {
  //   name: 'FRAME2',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame2' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame2' }
  //   ]
  // },
  // {
  //   name: 'FRAME3',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame3' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame3' }
  //   ]
  // },
  // {
  //   name: 'FRAME4',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame4' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame4' }
  //   ]
  // },
  // {
  //   name: 'FRAME5',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame5' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame5' }
  //   ]
  // },
  // {
  //   name: 'FRAME6',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame6' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame6' }
  //   ]
  // },
  // {
  //   name: 'FRAME7',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame7' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame7' }
  //   ]
  // },
  // {
  //   name: 'FRAME8',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame8' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame8' }
  //   ]
  // },
  // {
  //   name: 'FRAME9',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame9' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame9' }
  //   ]
  // },
  // {
  //   name: 'FRAME10',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame10' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame10' }
  //   ]
  // },
  // {
  //   name: 'FRAME11',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame11' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame11' }
  //   ]
  // },
  // {
  //   name: 'FRAME12',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame12' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame12' }
  //   ]
  // },
  // {
  //   name: 'FRAME13',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame13' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame13' }
  //   ]
  // },
  // {
  //   name: 'FRAME14',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame14' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame14' }
  //   ]
  // },
  // {
  //   name: 'FRAME15',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame15' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame15' }
  //   ]
  // },
  // {
  //   name: 'FRAME16',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame16' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame16' }
  //   ]
  // },
  // {
  //   name: 'FRAME17',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame17' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame17' }
  //   ]
  // },
  // {
  //   name: 'FRAME18',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame18' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame18' }
  //   ]
  // },
  // {
  //   name: 'FRAME19',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame19' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame19' }
  //   ]
  // },
  // {
  //   name: 'FRAME20',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame20' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame20' }
  //   ]
  // },
  // {
  //   name: 'FRAME21',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame21' }
  //   ],
  //   leaving: [
  //     // { name: 'engine/callScenario', options: 'frame21' }
  //   ]
  // },
  // {
  //   name: 'FRAME22',
  //   entering: [
  //     { name: 'engine/callScenario', options: 'frame22' }
  //   ],
]
