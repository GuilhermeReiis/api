const mongoose = require('mongoose');
const { number } = require('yup');

const Curso = mongoose.Schema(
  {
    curso : { type: String, required: true },
    duracao : { type: Number, required: true },
    valor : { type: Number, required: true },
    descricao : { type: String, required: true },
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('curso', Curso)