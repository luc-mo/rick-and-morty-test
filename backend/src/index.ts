import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { graphQLMiddleware } from './infrastructure/graphql/middleware/http'

const app = express()
const PORT = process.env.PORT ?? 8000

app.use(cors())
app.use(express.json())
app.use('/graphql', graphQLMiddleware)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
