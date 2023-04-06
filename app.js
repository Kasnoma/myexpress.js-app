const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
const list_of_students=
[
  {
    "name":"Favy",
    "age":"22"
  },
    {
    "name":"Ife",
    "age":"25"
  },
    {
      "name":"Rose",
      "age": "41"
  },
    {
      "name":"kelvin",
      "age":"30"
  },

]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/get-date', (req, res) => {   
    res.send(`WAT Timezone ${new Date(Date.now()).toLocaleDateString('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        
    })}`)
  })

app.get('/logout', (req, res) => {
    res.send('Logged out')
  })

app.get('/list-of-students', (req, res) => {
    res.send({list_of_students})
  })

app.get('/random-student', (req, res) => {
    let random_number=Math.floor(Math.random() * 4);
    res.send(list_of_students[random_number])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})