const db = require('../models')

// Create main model
const Movie = db.movies

// Get movies
 const getAllMovies = async (req, res) => {
     let movies = await Movie.findAll({})
     res.status(200).send(movies)
 }

 // Post movie
 const addMovie = async (req, res) => {
     try {
         await Movie.create(req.body);
         res.json({
             'message': 'Movie added successfully',
         });
     } catch (err) {
         console.log(err);
     }
 }

 // Update movie
 const updateMovie = async (req, res) => {
     try {
         await Movie.update(req.body, {
             where: {id: req.params.id}
         });
         res.json({
             'message': 'Movie updated successfully'
         });
     } catch (err) {
         console.log(err);
     }
 }

 module.exports = {
     getAllMovies,
     addMovie,
     updateMovie
 }