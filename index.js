const express = require('express')
const logger = require('./src/middleware/logger.middleware')
const auth = require('./src/middleware/auth.middleware')
const genresRoutes = require('./src/routes/genres.routes')
const moviesRoutes = require('./src/routes/movies.routes')
const app = express()
const port = 3002

app.use(logger)

app.use('/', [auth, genresRoutes, moviesRoutes])

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
