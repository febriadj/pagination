'use strict'

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/pagination';

module.exports = async function conn() {
  try {
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }

    await mongoose.connect(uri, options);
    console.log('mongodb connected');
  }
  catch(err) {
    console.error(err);
  }
}