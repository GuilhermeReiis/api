const mongoose = require('mongoose');
const { number, array, string } = require('yup');

const Venda = mongoose.Schema(
  {
    aluno : {type: Object},
    curso : [
      {
        area: String,
        curso: String,
        descricao: String,
        duracao: Number,
        modalidade: String,
        valor: Number
      }
    ],
    troco : {type : Number, },
    valor: {type: Number, },
    valorPg: {type: Number,},
    vendedor : {type: Object},

  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('venda', Venda)