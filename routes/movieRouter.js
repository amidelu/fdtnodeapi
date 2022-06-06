const verifyToken = require("../middleware/authJwt");
const movieController = require('../controllers/movieController.js')
const router = require('express').Router()

// Admin routes
// Router for getting movies
router.get('/allMovies', movieController.getAllMovies) // url: localhost:8080/api/movies/allMovies

// Router for adding movie
router.post('/addMovie', movieController.addMovie); // url: localhost:8080/api/movies/addMovie with body


// All user routes

// Router for getting images list
router.get('/posterUrls', [verifyToken], movieController.getLatestPoster) // url: localhost:8080/api/movies/posterUrls

// Router for getting latest movies with limit 12
router.get('/latestMovies', [verifyToken], movieController.getLatestMovies) // url: localhost:8080/api/movies/latestMovies

// Router for search movie
router.get('/searchMovie/:title', [verifyToken], movieController.searchMovie); // url: localhost:8080/api/movies/searchMovie/title

// Router for getting English Movies DESC movies
router.get('/allEnglishMovies/:page', [verifyToken], movieController.allEnglishMovies) // url: localhost:8080/api/movies/allEnglishMovies/page

// Router for getting Hindi Movies DESC movies
router.get('/allHindiMovies/:page', [verifyToken], movieController.allHindiMovies) // url: localhost:8080/api/movies/allHindiMovies/page

// Router for getting Bangla Movies DESC movies
router.get('/allBanglaMovies/:page', [verifyToken], movieController.allBanglaMovies) // url: localhost:8080/api/movies/allBanglaMovies/page

// English movie with limit 12
router.get('/englishMovieLimit', [verifyToken], movieController.englishMovieWithLimit); // url: localhost:8080/api/movies/englishMovieLimit

// Hindi movie with limit 12
router.get('/hindiMovieLimit', [verifyToken], movieController.hindiMovieWithLimit); // url: localhost:8080/api/movies/hindiMovieLimit

// Bangla movie with limit 12
router.get('/banglaMovieLimit', [verifyToken], movieController.banglaMovieWithLimit); // url: localhost:8080/api/movies/banglaMovieLimit

/* // Update movie
router.put('/movies/:id', [verifyToken], movieController.updateMovie); */

module.exports = router