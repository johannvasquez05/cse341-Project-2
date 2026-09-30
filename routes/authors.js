const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

/*  #swagger.parameters['body'] = {
        in: 'body',
        description: 'Author data payload',
        required: true,
        schema: {
            name: "Brandon Sanderson",
            birthYear: 1975,
            nationality: "American"
        }
} */

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.createAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;