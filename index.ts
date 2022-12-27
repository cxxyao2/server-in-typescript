import express from 'express'
import reminderRouter from './routers/reminders'
import { readAndParse, readFile } from './files'

const app = express()

app.use(express.json())
app.use('/reminders', reminderRouter)

app.get('/', (req, res) => {
  res.send('Hello World')
})

//readFile()
readAndParse()
app.listen(8000, () => console.log('Server started'))
