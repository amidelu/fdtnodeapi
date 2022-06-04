const { sequelize } = require("../models");
const db = require("../models");

// Create main model
const Movie = db.movies;

// Get movies
const getAllMovies = async (req, res) => {
  let movies = await Movie.findAll({});
  res.status(200).send(movies);
};

// Get latest poster
const getLatestPoster = async (req, res) => {
  let latestPosters = await Movie.findAll({
    limit: 10,
    order: [["id", "DESC"]],
  });
    const posterList = [];

    latestPosters.forEach(element => {
      posterList.push(element.posterUrl);
    });
    
  
  res.status(200).send({posters: posterList});
};

// Get latest movies
const getLatestMovies = async (req, res) => {
  let latestMovies = await Movie.findAll({
    limit: 12,
    order: [["id", "DESC"]],
  });
  res.status(200).send(latestMovies);
};

// Search movies
const searchMovie = async (req, res) => {
  console.log(req.params.title);
  await Movie.findAll({
    where: {
      title: sequelize.where(
        sequelize.fn("LOWER", sequelize.col("title")),
        "LIKE",
        "%" + req.params.title + "%"
      ),
    },
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Sorry, Movie Not Found!",
      });
    });
};

// Get all English Movies
const allEnglishMovies = async (req, res) => {
  let limit = 30;
  let offset = 0;

  await Movie.findAndCountAll({
    where: {category: 'English'}
  })
    .then((data) => {
      let page = req.params.page;
      let pages = Math.ceil(data.count / limit);
      offset = limit * (page - 1);

      Movie.findAll({
        where: { category: "English" },
        limit: limit,
        offset: offset,
        order: [["releaseDate", "DESC"]],
      }).then((result) => {
        res.status(200).send({
          'count': data.count,
          'pages': pages,
          'movies': result
        });
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: "Not Found!",
      });
    });
};

// Get all Hindi Movies
const allHindiMovies = async (req, res) => {
  let limit = 30;
  let offset = 0;

  await Movie.findAndCountAll({
    where: {category: 'Hindi'}
  })
    .then((data) => {
      let page = req.params.page;
      let pages = Math.ceil(data.count / limit);
      offset = limit * (page - 1);

      Movie.findAll({
        where: { category: "Hindi" },
        limit: limit,
        offset: offset,
        order: [["releaseDate", "DESC"]],
      }).then((result) => {
        res.status(200).send({
          'count': data.count,
          'pages': pages,
          'movies': result
        });
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: "Not Found!",
      });
    });
};

// Get all Bangla Movies
const allBanglaMovies = async (req, res) => {
  let limit = 30;
  let offset = 0;

  await Movie.findAndCountAll({
    where: {category: 'Bangla'}
  })
    .then((data) => {
      let page = req.params.page;
      let pages = Math.ceil(data.count / limit);
      offset = limit * (page - 1);

      Movie.findAll({
        where: { category: "Bangla" },
        limit: limit,
        offset: offset,
        order: [["releaseDate", "DESC"]],
      }).then((result) => {
        res.status(200).send({
          'count': data.count,
          'pages': pages,
          'movies': result
        });
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: "Not Found!",
      });
    });
};

// English movies with limit
const englishMovieWithLimit = async (req, res) => {
  let englishMovies = await Movie.findAll({
    limit: 12,
    where: {
      category: "English",
    },
    order: [["releaseDate", "DESC"]],
  });
  res.status(200).send(englishMovies);
};

// Hindi movies with limit
const hindiMovieWithLimit = async (req, res) => {
  let hindiMovies = await Movie.findAll({
    limit: 12,
    where: {
      category: "Hindi",
    },
    order: [["releaseDate", "DESC"]],
  });
  res.status(200).send(hindiMovies);
};

// Bangla movies with limit
const banglaMovieWithLimit = async (req, res) => {
  let banglaMovies = await Movie.findAll({
    limit: 12,
    where: {
      category: "Bangla",
    },
    order: [["releaseDate", "DESC"]],
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

const getPagination = (page, size) => {
  const offset = page ? +page : 0;
  const limit = size ? size + 20 : 20;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const {rows: movies} = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return {totalItems, movies, totalPages, currentPage};
}

/* // Update movie
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
}; */

module.exports = {
  getAllMovies,
  getLatestMovies,
  searchMovie,
  allEnglishMovies,
  allHindiMovies,
  allBanglaMovies,
  addMovie,
  englishMovieWithLimit,
  hindiMovieWithLimit,
  banglaMovieWithLimit,
  getLatestPoster
};
