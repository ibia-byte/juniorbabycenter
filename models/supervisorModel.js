const mongoose = require("mongoose");

// Schema defintion
const supervisorSchema = new mongoose.Schema({
    firstName: {
        type: String
        // required: [true, "Please Enter name"]
    },

    lastName: {
        type: String
        // required: [true, "Please Enter last name"]
    },
    sex: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    residence: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    
    club: {
        type: String
    }


});




module.exports = mongoose.model('Supervisor', supervisorSchema);
