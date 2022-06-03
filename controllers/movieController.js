const { sequelize } = require("../models");
const db = require("../models");

// Create main model
const Movie = db.movies;

// Get movies
const getAllMovies = async (req, res) => {
  let movies = await Movie.findAll({});
  res.status(200).send(movies);
};

// Get latest movies
const getLatestMovies = async (req, res) => {
  let latestMovies = await Movie.findAll({
    limit: 16,
    order: [['id', 'DESC']]
});
res.status(200).send(latestMovies);
};

// Search movies
const searchMovie = async (req, res) => {
  console.log(req.params.title);
  await Movie.findAll({
    where: {
      title: sequelize.where(
        sequelize.fn('LOWER', sequelize.col('title')),
        'LIKE',
        '%' + req.params.title + '%'
      )
    },
  }).then (result => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(500).send({
      message: 'Sorry, Movie Not Found!'
    });
  });
};

// Get all English Movies
const allEnglishMovies = async (req, res) => {
  await Movie.findAll({
    where: {category: 'English'},
    order: [['releaseDate', 'DESC']]
  }).then (result => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(500).send({
      message: 'Not Found!'
    });
  });
}

// Get all Hindi Movies
const allHindiMovies = async (req, res) => {
  await Movie.findAll({
    where: {category: 'Hindi'},
    order: [['releaseDate', 'DESC']]
  }).then (result => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(500).send({
      message: 'Not Found!'
    });
  });
}

// Get all Bangla Movies
const allBanglaMovies = async (req, res) => {
  await Movie.findAll({
    where: {category: 'Bangla'},
    order: [['releaseDate', 'DESC']]
  }).then (result => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(500).send({
      message: 'Not Found!'
    });
  });
}

// Single movie
const singleMovie = async (req, res) => {
  await Movie.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find movie with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// English movies with limit
const englishMovieWithLimit = async (req, res) => {
    let englishMovies = await Movie.findAll({
        limit: 12,
        where: {
            category: 'English'
        },
        order: [['releaseDate', 'DESC']]
    });
    res.status(200).send(englishMovies);
};

// Hindi movies with limit
const hindiMovieWithLimit = async (req, res) => {
    let hindiMovies = await Movie.findAll({
        limit: 12,
        where: {
            category: 'Hindi'
        },
        order: [['releaseDate', 'DESC']]
    });
    res.status(200).send(hindiMovies);
};

// Bangla movies with limit
const banglaMovieWithLimit = async (req, res) => {
    let banglaMovies = await Movie.findAll({
        limit: 12,
        where: {
            category: 'Bangla'
        },
        order: [['releaseDate', 'DESC']]
    });
    res.status(200).send(banglaMovies);
};

// Post movie
const addMovie = async (req, res) => {
  try {
    await Movie.create(req.body);
    res.json({
      message: "Movie added successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

// Update movie
const updateMovie = async (req, res) => {
  try {
    await Movie.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Movie updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllMovies,
  getLatestMovies,
  searchMovie,
  allEnglishMovies,
  allHindiMovies,
  allBanglaMovies,
  singleMovie,
  addMovie,
  updateMovie,
  englishMovieWithLimit,
  hindiMovieWithLimit,
  banglaMovieWithLimit,
};
