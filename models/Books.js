'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL);
const bookSchema = new mongoose.Schema ({
  title: {type: String, requires: true},
  description: {type: String, required true},
})