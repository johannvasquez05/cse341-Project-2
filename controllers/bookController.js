const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createBook = async (req, res) => {
    /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Religious text data payload',
            required: true,
            schema: {
                title: "The Book of Mormon",
                author: "Joseph Smith",
                publishedYear: 1830,
                genre: "Religion",
                isbn: "9780385528080",
                pages: 531,
                language: "English",
                isAvailable: true
            }
    } */
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    /*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Religious text data payload',
        required: true,
        schema: {
            title: "The Book of Mormon",
            author: "Joseph Smith",
            publishedYear: 1830,
            genre: "Religion",
            isbn: "9780385528080",
            pages: 531,
            language: "English",
            isAvailable: true
        }
    } */
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};