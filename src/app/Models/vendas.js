const mongoose = require('mongoose');
const { number, array, string } = require('yup');

const Venda = mongoose.Schema(
  {
    aluno : {type: String},
    curso : [
      {
        
      }
    ],
    vendedor : {type: String},

    valorPago : {  type : Number, required: true },
    troco : { type : Number, required: true}
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('venda', Venda)