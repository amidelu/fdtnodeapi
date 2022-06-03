const verifyToken = require("../middleware/authJwt");
const movieController = require('../controllers/movieController.js')
const router = require('express').Router()

// Router for getting movies
router.get('/allMovies', [verifyToken], movieController.getAllMovies) // url: localhost:8080/api/movies/allMovies

// Router for getting latest movies with limit 16
router.get('/latestMovies', [verifyToken], movieController.getLatestMovies) // url: localhost:8080/api/movies/latestMovies

// Router for search movie
router.get('/searchMovie/:title', [verifyToken], movieController.searchMovie); // url: localhost:8080/api/movies/searchMovie/title

// Router for getting English Movies DESC movies
router.get('/allEnglishMovies', [verifyToken], movieController.allEnglishMovies) // url: localhost:8080/api/movies/allEnglishMovies

// Router for getting Hindi Movies DESC movies
router.get('/allHindiMovies', [verifyToken], movieController.allHindiMovies) // url: localhost:8080/api/movies/allHindiMovies

// Router for getting Bangla Movies DESC movies
router.get('/allBanglaMovies', [verifyToken], movieController.allBanglaMovies) // url: localhost:8080/api/movies/allBanglaMovies

// Get single movie
router.get('/singleMovie/:id', [verifyToken], movieController.singleMovie); // url: localhost:8080/api/movies/singleMovie/id

// English movie with limit 12
router.get('/englishMovieLimit', [verifyToken], movieController.englishMovieWithLimit); // url: localhost:8080/api/movies/englishMovieLimit

// Hindi movie with limit 12
router.get('/hindiMovieLimit', [verifyToken], movieController.hindiMovieWithLimit); // url: localhost:8080/api/movies/hindiMovieLimit

// Bangla movie with limit 12
router.get('/banglaMovieLimit', [verifyToken], movieController.banglaMovieWithLimit); // url: localhost:8080/api/movies/banglaMovieLimit

// Router for adding movie
router.post('/addMovie', [verifyToken], movieController.addMovie); // url: localhost:8080/api/movies/addMovie with body

// Update movie
router.put('/movies/:id', [verifyToken], movieController.updateMovie);

module.exports = router