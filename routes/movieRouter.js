const movieController = require('../controllers/movieController.js')
const router = require('express').Router()

// Router for getting movies
router.get('/allMovies', movieController.getAllMovies)

module.exports = router