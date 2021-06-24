const express = require('express');
const app = express()

const connectDB = require('./config/db')
connectDB()

// inti middleware : body parser
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('API running')
})

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
})