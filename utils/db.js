// respues tas de la db son de tipo asynconica
const MongoClient = require('mongodb').MongoClient;

// desde cualquier modelo de datos poder acceder a este pool 
const pool = async () => {
    try {

        // -> referencia a la coneccion
        return (await MongoClient.connect('mongodb://localhost:27017')).db('partidos')

    } catch (err) {
        // .error -> deja el error establecido en la consola de forever
        console.error(err.stack); // 
    }
}

// para luego usar destructuracion de objectos y obtner -> pool
module.exports = { pool }