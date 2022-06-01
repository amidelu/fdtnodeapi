const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'http://localhost:46855'
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routers
const router = require('./routes/movieRouter.js')
app.use('/api/movies', router) // url: localhost:8080/api/movies/allMovies

app.get('/', (req, res) => {
    res.json({message: 'hello from api'})
})

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})