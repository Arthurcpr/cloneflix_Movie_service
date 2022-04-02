const { TheMovieDbService } = require("../Services/themoviedb.service")
const service = new TheMovieDbService()

const getGenres = async(req, res) => {
    const result = await service.search_genres()
    return res.json(result)
}

const getGenTvList = async(req, res) => {
    const result = await service.searchGenreTv()
    return res.json(result)
}

module.exports = {
    getGenres,
    getGenTvList
}
