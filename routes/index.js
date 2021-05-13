'use strict'

const router = require('express').Router();

// import controlers
const addMovies = require('../controllers/add-movies');
const getMovies = require('../controllers/get-movies');

router.post('/movies', addMovies);
router.get('/movies', getMovies);

module.exports = router;