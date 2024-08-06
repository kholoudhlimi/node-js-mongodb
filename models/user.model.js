
const mongoose = require("mongoose");
const uniqueValidateur = require('mongoose-unique-validator');
const userShema = mongoose.Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true }
});
  userShema.plugin(uniqueValidateur);
  
   module.exports = mongoose.model('user.model',userShema);