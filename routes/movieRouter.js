const movieController = require('../controllers/movieController.js')
const router = require('express').Router()

// Router for getting movies
router.get('/allMovies', movieController.getAllMovies)

// Router for adding movie
router.post('addMovie', movieController.addMovie);

// Update movie
router.put('/movies/:id', movieController.updateMovie);

module.exports = router