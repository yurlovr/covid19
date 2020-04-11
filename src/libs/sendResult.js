import uuid from 'uuid'

export default function sendResult (answers) {
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