import express from 'express'
import mongoose from 'mongoose'
import ContactDetailsRouter from './Routes/ContactDetails.js' // Adjust the path as necessary
const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/therapist_website').then(() => {
  console.log('Connected to MongoDB')
}).catch(err => {
  console.error('Error connecting to MongoDB', err)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/contact', ContactDetailsRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})