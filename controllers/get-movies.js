'use strict'

const Movies = require('../models/movies');

const paginate = async (movie, page, limit) => {
  const 
    start = (page - 1) * limit
  , end = page * limit
  , list = movie.slice(start, end);

  const movePage = {}

  if (end < movie.length) {
    movePage.next = parseInt(page) + 1;
  }
  
  if (start > 0) {
    movePage.prev = parseInt(page) - 1;
  }

  return { list, movePage };
}

module.exports = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const movie = await Movies.find().sort({ createdAt: - 1 });
    
    if (!movie || movie.length == 0) {
      throw {
        code: 200,
        status: 'success',
        msg: 'list movies masih kosong'
      }
    }

    const response = await paginate(movie, page, limit);
    const { list, movePage } = response;

    res.status(200).json({ 
      move_page: movePage, list 
    });
  }
  catch(err) {
    const { code, status, msg } = err;

    res.status(code).json({
      status, msg
    })
  }
}