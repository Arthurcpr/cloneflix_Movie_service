const express = require('express')
const movieController = require('../controllers/movies.controller')

const router = express.Router()

router.get('/movie/:id', movieController.getMovieById)


module.exports = router
