const express = require('express');
const router = express.Router();
const Supervisor = require('../models/supervisorModel')


router.get('/', (req, res) => {
    res.render("supervisor.ejs")

});

// submits the register page information
router.post('/', async (req, res) => {
    const user = new Supervisor(req.body)
    try {
        await user.save()
        console.log("Item has been saved");
        //res.send('Data Saved Successfully');
         const items = await Supervisor.find()
         res.render('supervisorlist.pug', { supervisors: items })
    } catch (err) {
        res.status(500).send("unable to save to database");
    }
})

module.exports = router;