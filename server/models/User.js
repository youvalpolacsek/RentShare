const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    transactions: [{type: Schema.Types.ObjectId, ref: 'Transaction'}],

})

const User = mongoose.model("User", userSchema)

module.exports = User
