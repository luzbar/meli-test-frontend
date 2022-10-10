import express from 'express'
import cors from 'cors'

import itemRouter from './routes/items'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 4000

app.use('/api/items', itemRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
