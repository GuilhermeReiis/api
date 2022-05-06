const mongoose = require('mongoose');
const { string } = require('yup');

const User = mongoose.Schema(
  {
    name : { type: String, required: true },
    cpf: {type: Number, required: true},
    email : { type: String, required: true },
    tell: {type: Number, required: true},
    password : { type: String, required: true },
    status: {type: Boolean, required: false}
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('user', User)