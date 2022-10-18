// Middleware para proteger rutas

// Revisar que existe un token
// Verificar si el token pertenece a un usuario valido
// Modificar el req y agregar req.user con la información desencriptada del token

// Las estrateguas son las diferentes maneras de hacer un login

const { jwtSecret } = require("../config")
const { getUserById } = require("../users/users.controllers")

const JwtStrategy = require("passport-jwt").Strategy // Estrategias para las diferentes autenticaciones
const ExtractJwt = require("passport-jwt").ExtractJwt //Extrae los header de la petición

module.exports = (passport) => {
    const options = {
        jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: jwtSecret
    }
    passport.use(
        new JwtStrategy(options, async (decoded, done) => { //Opcions and callback
            try {
                const response = await getUserById(decoded.id)
                if(!response) {
                    return done(null, false)
                }
                console.log("decoded JWT", decoded)
                return done(null, decoded)
            } catch (error) {
                return done(error, false)
            }
        })
    )
}

