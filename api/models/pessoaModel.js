const mongoose = require('mongoose');

const { Schema } = mongoose;

const pessoaSchema = new Schema(
  {
    tipoPessoa: {
      type: String,
      required: 'tipoPessoa não pode ser em branco'
    },
    nomeRazao: {
      type: String,
      required: 'nomeRazao não pode ser em branco'
    },
    documento: {
      type: String,
      required: 'documento  não pode ser em branco'
    },
    uf: {
      type: String,
      required: 'documento  não pode ser em branco'
    },
    cidade: {
      type: String,
      required: 'documento  não pode ser em branco'
    },
    nascimentoAbertura: {
      type: String
    },
    telefone: {
      type: String,
      required: 'telefone  não pode ser em branco'
    }
  },
  { collection: 'pessoa' }
);

module.exports = mongoose.model('pessoa', pessoaSchema);