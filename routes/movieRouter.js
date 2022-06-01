const movieController = require('../controllers/movieController.js')
const router = require('express').Router()

// Router for getting movies
router.get('/allMovies', movieController.getAllMovies) // url: localhost:8080/api/movies/allMovies

// Get single movie
router.get('/singleMovie/:id', movieController.singleMovie); // url: localhost:8080/api/movies/singleMovie/id

// English movie with limit 12
router.get('/englishMovieLimit', movieController.englishMovieWithLimit); // url: localhost:8080/api/movies/englishMovieLimit

// Hindi movie with limit 12
router.get('/hindiMovieLimit', movieController.hindiMovieWithLimit); // url: localhost:8080/api/movies/hindiMovieLimit

// Bangla movie with limit 12
router.get('/banglaMovieLimit', movieController.banglaMovieWithLimit); // url: localhost:8080/api/movies/banglaMovieLimit

// Router for adding movie
router.post('/addMovie', movieController.addMovie); // url: localhost:8080/api/movies/addMovie with body

// Update movie
router.put('/movies/:id', movieController.updateMovie);

module.exports = router