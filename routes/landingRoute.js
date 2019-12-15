// Requiring the packages
const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");


// gets and displays a login page
router.get('/', (req, res) => {
    res.render('landingPage.ejs')
})

// // submits a login page information
// router.post('/', async (req, res) => {
//     console.log('Form submitted Successfully')
//     // console.log(request.body)
//     try {
//         const user = await Employee.authenticate(req.body.username, req.body.password);
//         console.log(req.body);
//         // req.session.user = user
//         // res.render('list', {registers: items})
//         // res.send("Hey " + user.firstName + " " + user.lastName)
//         // response.redirect("register/search");
//         res.redirect("/login");
//     } catch{
//         res.render('login.ejs', { error: 'Login Failed' })
//         // res.redirect('register')
//     }
// })


module.exports = router;