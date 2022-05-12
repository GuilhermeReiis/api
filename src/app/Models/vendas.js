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
    vendedor : {type: Object},

    valorPago : {type: Number, },
    troco : {type : Number, }
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('venda', Venda)