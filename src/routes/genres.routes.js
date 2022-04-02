const express = require('express')
const genresController = require('../controllers/genres.controller')

const router = express.Router()

router.get('/genres', genresController.getGenres)


module.exports = router