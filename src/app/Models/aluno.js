const mongoose = require('mongoose');
const { string } = require('yup');

const Aluno = mongoose.Schema(
  {
    name : { type: String, required: true },
    email : { type: String, required: true },
    age: { type: Number, required: true },
    tell:{type:  Number, required: true},
    curso:{type: String, required: false},
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('aluno', Aluno)