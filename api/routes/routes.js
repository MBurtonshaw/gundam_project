const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/api/main');
});

router.get('/main', (req, res) => {
    res.send('main');
});

module.exports = router;