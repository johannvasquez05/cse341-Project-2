const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number },
    genre: { type: String },
    isbn: { type: String, required: true },
    pages: { type: Number },
    language: { type: String },
    isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);