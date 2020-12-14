const mongoose = require('mongoose');

const { Schema } = mongoose;

const ufSchema = new Schema(
  {
    codigo: {
      type: String,
      required: 'codigo não pode ser em branco'
    },
    unidade: {
      type: String,
      required: 'unidade não pode ser em branco'
    },
    uf: {
      type: String,
      required: 'uf  não pode ser em branco'
    }
  },
  { collection: 'uf' }
);

module.exports = mongoose.model('uf', ufSchema);