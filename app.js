const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})