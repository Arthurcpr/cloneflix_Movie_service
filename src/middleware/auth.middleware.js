const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../configs/jwt.config')
const jwtConfif = require('../configs/jwt.config')

/*
const auth = (req, res, next) => {
    console.log('Verificando se esta autenticado');
    if (req.headers['authorization'] === 'pittinha') {
        return next()
    }
    res.status(401).send({error: 'unauthenticated'})
}
*/

const verify = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(401).json({message: 'Ta faltando token'})
    }

    jwt.verify(token, jwtSecret, function (err, decoded){
        if (err) {
            return res.status(500).json({message: 'Deu ruim'})
        }
        req.idUser = decoded.id
        next()
    })
}


module.exports = {
    verify
}



/* 
alterar o auth para jwt, igual a rate api
*/