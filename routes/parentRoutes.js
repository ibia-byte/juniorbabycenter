// Requiring the packages
const express = require('express');
const router = express.Router();
const Parent = require('../models/parentModel')


router.get('/', (req, res) => {
    res.render("parent.ejs")

});

// submits the register page information
router.post('/', async (req, res) => {
    const user = new Parent(req.body)
    try {
        await user.save()
        console.log("Item has been saved");
        //res.send('Data Saved Successfully');
        const items = await Parent.find()
         res.render('parentlist.pug', { parents: items })
    } catch (err) {
        res.status(500).send("unable to save to database");
    }
})

module.exports = router;