const router = require('express').Router();

const modelUsers = require('../models/users');

router.get('/', (req, res) => {
    modelUsers
        .getAll()
        .then(response => res.json({ users: response }))
        .catch(() => res.status(500).json());
});

module.exports = router;