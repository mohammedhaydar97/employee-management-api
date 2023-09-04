const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    bloodType: {
        type: String
    },
    ocupation: {
        type: String
    },
    referedPerson: {
        type: String
    },
}
    , {
        timestamps: true
    })


const User = mongoose.model('User', userSchema)

module.exports = User