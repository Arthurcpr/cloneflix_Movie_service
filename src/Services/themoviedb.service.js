/*

- api_key = '038fc0368ed70326ccea2cb73f44225a'
- api_version = 3
- api_base_url = f'https://api.themoviedb.org/{api_version}'
- endpoint(exemplo) = '/movie/76341'

*/


const axios = require('axios')

class TheMovieDbService {

    constructor() {
        this.api_key = '038fc0368ed70326ccea2cb73f44225a'
        this.api_version = 3
        this.api_base_url = `https://api.themoviedb.org/${this.api_version}`
    }
    
    async do_request(endpoint, parans = {}) {
        const url = `${this.api_base_url}/${endpoint}?api_key=${this.api_key}`
        return axios.get(url)
    }

    async search_movie(movie_id) {
        try {
            const response = await this.do_request(`/movie/${movie_id}`)
            return response.data
        }
        catch(error) {
            console.error('algum erro', error)
        }
    }

    async search_genres() {
        try {
            const response = await this.do_request(`/genre/movie/list`)
            return response.data
            
        } catch (error) {
            console.log('algum erro', error);
        }
        
    }
    
    async genresTv() {    
        try {
            const searchGenreTv = await this.do_request('/genre/tv/list')
            return searchGenreTv.data
        } catch (error) {
            console.log('Algum erro', error);
        }
    }

}

module.exports = {
    TheMovieDbService
}