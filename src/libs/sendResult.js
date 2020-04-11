import uuid from 'uuid'

export default function sendResult (answers) {
  console.log(answers)
  fetch('https://covid19-quest.herokuapp.com/api/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId: uuid(), answers})
  }).then(res => res.json())
  .then(r => console.log(r))
  .catch(e => console.warn(e))

}