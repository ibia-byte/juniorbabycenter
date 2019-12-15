// Requiring the packages
const express = require('express');
const path = require('path');
const pug = require('pug');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Employee = require('./models/employeeModel');
const Parent = require('./models/parentModel');
const Supervisor = require('./models/supervisorModel');
const ejs = require('ejs');

// Init app 
const app = express();


// middleware
app.use(bodyParser.urlencoded({ extended: true }));
// setting the view engine
app.set('view engine', 'ejs');
app.set('view engine', 'pug');


app.set('views', path.join(__dirname, 'views'));
// setting the static folder
app.use(express.static(path.join(__dirname, 'public')));


// mongoose db connection
mongoose.connect("mongodb://localhost:27017/JBC-node", { useUnifiedTopology: true, useNewUrlParser: true }, ()=>{
    console.log("successfully connected to the db!")
});


app.get('/',(req,res)=>{
    res.render('landingPage.ejs')
})

//importing routes
const employee_Route = require('./routes/employeeRoutes')
app.use('/register', employee_Route)


const supervisor_Route = require('./routes/supervisorRoutes')
app.use('/enter', supervisor_Route)

const parent_Route = require('./routes/parentRoutes')
app.use('/registration', parent_Route)

const login_Route = require('./routes/loginRoutes')
app.use('/login', login_Route)

// const landing_Route = require('./routes/landingRoutes')
// app.use('/land', landing_Route)
// app.post("/", (req, res) => {

//     //Create New Employee
//     const myEmployee = new Employee(req.body);
//     console.log(req.body)
//     myEmployee.save()
//         .then(item => {
//             // Employee.find().then(items => {
//             //     console.log("Data Saved to Database Successfully");
//             //     res.send('Data Saved Successfully')
//             //     // res.render("listEmployees.pug", { employees: items });
//             // });
//             console.log('Data Saved')
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(400).send("unable to save to database");
//         });
// });


//  Listening for requests: the server
app.listen(3000, () => {
    console.log("listening on 3000");

})