import path from 'path'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import './database/connection'
import errorHanlder from './errors/handler'

import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())
app.use(errorHanlder)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333)
