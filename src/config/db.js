// respues tas de la db son de tipo asynconica
const MongoClient = require('mongodb').MongoClient;

/**
 * desde cualquier modelo de datos poder acceder a este pool 
 * 
 * 
 * Es un pool de conecciones, porque mongo maneja las conexiones como pila
 * de request, todo lo que no se puede resolver, va quedando en pilas
 */
const pool = async () => {
    try {

        // -> referencia a la coneccion
        return (await MongoClient.connect('mongodb+srv://userapp:1234567890@cluster0.7sj4r.mongodb.net/test'))
            .db('partidos')

    } catch (err) {
        // .error -> deja el error establecido en la consola de forever
        console.log("no se pudo conectar con mongodb"); // 
        console.error(err.stack); // 
    }
}

// para luego usar destructuracion de objectos y obtner -> pool
module.exports = { pool }