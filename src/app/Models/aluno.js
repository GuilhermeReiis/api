const mongoose = require("mongoose");
const { string, array } = require("yup");

const Aluno = mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    tell: { type: Number, required: true },
    curso: [
      {
        type: String
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("aluno", Aluno);
