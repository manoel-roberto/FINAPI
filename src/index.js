const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.json({ mensager: 'teste de api' })
})

app.listen(3333)
