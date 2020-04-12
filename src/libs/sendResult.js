import uuid from 'uuid'
// 'https://covid19-quest.herokuapp.com/api/data' 'http://localhost:3000/api/data'
export default function sendResult (answers) {
  // console.log(answers)
  // console.log(uuid())
  fetch('https://covid19-quest.herokuapp.com/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId: uuid(), answers, bot: true})
  }).then(res => res.json())
  .then(r => console.log(r))
  .catch(e => console.warn(e))

}