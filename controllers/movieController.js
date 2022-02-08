const db = require('../models')

// Create main model
const Movie = db.movies

// Get movies
 const getAllMovies = async (req, res) => {
     let movies = await Movie.findAll({})
     res.status(200).send(movies)
 }

 module.exports = {
     getAllMovies
 }