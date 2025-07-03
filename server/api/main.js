import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import ContactDetailsRouter from '../Routes/ContactDetails.js'
import ConsultationDetailsRouter from '../Routes/ConsultationDetails.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect(process.env.CONNECTION_DBB).then(() => {
  console.log('Connected to MongoDB')
}).catch(err => {
  console.error('Error connecting to MongoDB', err)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/contact',ContactDetailsRouter) 
app.use('/consultation', ConsultationDetailsRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})