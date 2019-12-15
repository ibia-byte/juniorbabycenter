const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// Schema defintion
const employeeSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
        // required: [true, "Please Enter name"]
    },

    lastName: {
        type: String
        // required: [true, "Please Enter last name"]
    },
    sex:{
        type: String
    } ,
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
    club:{
        type:String
    }


});


// hashing a password before saving it to the database pre-save hook
employeeSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next()
});

// authenticate input against database
employeeSchema.statics.authenticate = async function (username, password) {
    const user = await this.findOne({ username: username })
    if (!user) {
        throw new Error('User not found.');
    }
    const match = await bcrypt.compare(password, user.password)
    if (match) {
        return user;
    }
}

module.exports = mongoose.model('Employee', employeeSchema);
