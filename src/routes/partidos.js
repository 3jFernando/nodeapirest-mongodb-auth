const express = require('express');
const router = express.Router();

const modelPartido = require('../models/partidos');

// uso de promesas
const all = (req, res) => {
    modelPartido
        .all()
        .then(response => res.status(200).json({ partidos: response }))
        .catch(() => res.status(500).json({ message: "no es posible cargar ALL" }));
}

// uso de async -- await -> para no usar promesas y se controla con try->catch
const filter = async (req, res) => {
    try {
        const { start, end } = req.query
        const partidos = await modelPartido.findByDate(start, end)
        res.json({ partidos });
    } catch (e) {
        res.status(500).json({ message: "no es posible filtrar" })
    }
}

router.get("/all", all);
router.get("/filter", filter)

module.exports = router;