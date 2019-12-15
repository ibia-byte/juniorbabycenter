const mongoose = require("mongoose");

// Schema defintion
const parentSchema = new mongoose.Schema({
    parentName: {
        type: String
        // required: [true, "Please Enter the parent name"]
    },

    babyName: {
        type: String
        // required: [true, "Please Enter Baby name"]
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
    nok: {
        type: String
    },
    club: {
        type: String
    }


});




module.exports = mongoose.model('Parent', parentSchema);
