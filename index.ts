import express from 'express'
import reminderRouter from './routers/reminders'
import postRouter from './routers/posts'
import userRouter from './routers/users'
// import { readAndParse, readFile } from './files'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/reminders', reminderRouter)
app.use('/posts', postRouter)
app.use('/users', userRouter)

app.get('/', (req, res) => {
	res.send('Hello World')
})

//readFile()
// readAndParse()
app.listen(8000, () => console.log('Server started'))
