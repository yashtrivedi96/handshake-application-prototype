const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const studentRouter = require('./routers/student')
const employerRouter = require('./routers/employer')
const jobRouter = require('./routers/job')
const eventRouter = require('./routers/event')
const chatRouter = require('./routers/chat')


const app = express()
app.use(cors({ origin: 'http://localhost:3001', credentials: true }))
app.use(express.json({ extended: false }))
const port = process.env.PORT || 3000

app.use(express.json())
app.use(studentRouter)
app.use(employerRouter)
app.use(jobRouter)
app.use(eventRouter)
app.use(chatRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})