let mongoose = require('mongoose');

// create a model class
let userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('user', userSchema);