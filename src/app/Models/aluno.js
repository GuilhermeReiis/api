const mongoose = require('mongoose');
const { string, array } = require('yup');

const Aluno = mongoose.Schema(
  {
    name : { type: String, required: true },
    email : { type: String, required: true },
    age: { type: Number, required: true },
    tell:{type:  Number, required: true},
    curso:{type: Array, required: false},
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('aluno', Aluno)