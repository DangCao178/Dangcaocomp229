const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

const contactRoutes = require('./backend/routes/contactRoutes')
const projectRoutes = require('./backend/routes/projectRoutes')
const qualificationRoutes = require('./backend/routes/qualificationRoutes')
const userRoutes = require('./backend/routes/userRoutes')
const authRoutes = require('./backend/routes/authRoutes')

app.use('/api/contacts', contactRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/qualifications', qualificationRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Portfolio API Running')
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
