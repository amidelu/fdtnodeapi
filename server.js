const express = require('express')
const cors = require('cors')
const helmet = require('helmet');

const app = express()

var corsOptions = {
    origin: '*'
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())

// Routers
const userRouter = require('./routes/userRouter.js')
const router = require('./routes/movieRouter.js')
app.use('/api/movies', userRouter) // url: localhost:8080/api/movies/login
app.use('/api/movies', router) // url: localhost:8080/api/movies/allMovies

app.get('/', (req, res) => {
    res.json({message: 'hello from api'})
})

//port
const PORT = process.env.PORT || 3000

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})