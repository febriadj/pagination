'use strict'

const Movies = require('../models/movies');

module.exports = (req, res, next) => {
  const { title, genre, rating } = req.body;

  const movie = new Movies({
    title, genre, rating
  })

  movie.save((err, response) => {
    if (err) {
      res.status(400).json({
        status: 'failed',
        msg: 'gagal upload movie'
      })
    }

    res.status(200).json(response);
  })
}