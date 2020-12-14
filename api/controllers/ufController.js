const mongoose = require('mongoose');
const pessoa = mongoose.model('uf');

exports.list_all_uf = (req, res) => {
  pessoa.find({}, (err, uf) => {
    if (err) res.send(err);
    res.json(uf);
  });
};