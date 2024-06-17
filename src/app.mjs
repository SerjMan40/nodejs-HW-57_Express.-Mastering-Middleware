import express from 'express'
import router from './routes/index.mjs'

const app = express()
app.use(express.json())

const PORT = 3000

app.use(router)

app.listen(PORT, () => console.log('Server was started on port:', PORT))
