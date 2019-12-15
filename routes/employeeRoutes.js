// Requiring the packages
const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel')


router.get('/', (req, res) => {
    res.render("employee.ejs")

});

// submits the register page information
router.post('/', async (req, res) => {
    const user = new Employee(req.body)
    try {
        await user.save()
        console.log("Item has been saved");
        // res.send('Data Saved Successfully');
        const items = await Employee.find()
        res.render('employeelist.pug', { employees: items })
    } catch (err) {
        res.status(500).send("unable to save to database");
    }
})

module.exports = router;