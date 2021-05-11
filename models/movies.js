'use strict'

const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 0.00
  }
}, {
  timestamps: true,
  bufferCommands: false,
  autoCreate: false
})

const Movies = model('movies', movieSchema);
module.exports = Movies;