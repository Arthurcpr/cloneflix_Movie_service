const { TheMovieDbService } = require("../Services/themoviedb.service")
const service = new TheMovieDbService()

const getMovieById = async(req, res) => {
    const id = req.params.id
    const result = await service.search_movie(id)
    return res.json(result) 
}


module.exports = {
    getMovieById
}