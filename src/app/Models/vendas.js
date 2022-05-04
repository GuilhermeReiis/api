const mongoose = require('mongoose');
const { number, array } = require('yup');

const Venda = mongoose.Schema(
  {
    status: {type: Boolean},
    aluno : { type: String, required: true },
    curso : { type: String, required: true },
    vendedor : { type: String, required: true },
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('venda', Venda)