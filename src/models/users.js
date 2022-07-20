const { pool } = require('../config/db');

const find = async ({ conditions = {}, projections = {}, sort = {}, limit = 10 }) => {
    try {
        return (await pool())
            .collection('usuarios')
            .find(conditions, projections)
            .sort(sort)
            .limit(limit)
            .toArray()

    } catch (error) {
        console.log(error);
    }
}

const getAll = async () => find({})

module.exports = { getAll }