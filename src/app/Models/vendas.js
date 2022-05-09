const mongoose = require('mongoose');
const { number, array, string } = require('yup');

const Venda = mongoose.Schema(
  {
    aluno : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aluno',
        required: true
      }
    ],
    curso : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:'curso',
        required: true
      }
    ],
    vendedor : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    ],

    valorPago : {  type : Number, required: true },
    troco : { type : Number, required: true}
  },
  { 
    timestamps: true,
  }
)


module.exports = mongoose.model('venda', Venda)