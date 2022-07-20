const { pool } = require('../config/db');

// metodo create
const create = async (obj) => (await pool()).collection('equipo').insertOne(obj);

/**
 * find -> motodo global para consultar informacion 
 * 
 * @param {*} conditions -> clausulas
 * @param {*} projection -> campos a seleccionar
 * @param {*} sort       -> filtrado
 * @param {*} limit      -> cantidad 
 */
const find = async ({ conditions = {}, projection = {}, sort = {}, limit = 50 }) => {
    try {

        return (await pool())
            .collection('equipos')
            .find(conditions, projection)
            .sort(sort)
            .limit(limit)
            .toArray()

    } catch (error) {
        console.log(error);
    }
}

/**
 * Metodo last -> cargar el ultimo
 * 
 * sort: { _id: -1 } -> permite cargar los items ordenados al contrario
 * como un orderBy('ACS' | 'DESC')
 * */
const last = async () => find({ sort: { _id: -1 } });

// all
const all = async () => find({})

// cargar datos entre fechas
// endpoint/partidos/filter?start=2020-11-20&end=2020-12-01
const findByDate = async (start, end) => {
    return find({
        conditions: {
            fecha: {
                $gte: start, // ISOString -> tipo de fecha que debe haber en la db
                $lte: end
            }
        }
    })
}

module.exports = { create, last, all, findByDate }