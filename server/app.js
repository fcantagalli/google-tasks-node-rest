import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'

let app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/hello', (req, res) => {
  res.json('Hello world With changes now!!!!')
})

app.listen(8080)
