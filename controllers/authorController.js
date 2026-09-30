const Author = require('../models/author');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAuthor = async (req, res) => {
    try {
        const author = new Author({
            name: req.body.name,
            birthYear: req.body.birthYear,
            nationality: req.body.nationality
        });
        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                birthYear: req.body.birthYear,
                nationality: req.body.nationality
            },
            { new: true, runValidators: true }
        );
        if (!updatedAuthor) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json({ message: 'Author deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};