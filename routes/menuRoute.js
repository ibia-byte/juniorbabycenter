const express = require('express');
const router = express.Router();
const Menu = require('../models/menuModel')


router.get('/', (req, res) => {
    res.render("menu")

});



module.exports = router;