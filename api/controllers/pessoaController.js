const mongoose = require('mongoose');
const pessoa = mongoose.model('pessoa');

exports.list_all_pessoas = (req, res) => {
  pessoa.find().collation({locale:'pt', strength: 3})
    .sort({nomeRazao: 1})
      .then(pessoa => {
        res.json(pessoa);
      }).catch(err => res.send(err))
};

exports.create_a_pessoa = (req, res) => {
  const newpessoa = new pessoa(req.body);
  pessoa.findOne({documento: req.body.documento}).then(pessoa => {
    if(pessoa){
      res.status(303).jsonp({message: 'CPF/CPNJ já cadastrado.'});
    } else {
      newpessoa.save((err, pessoa) => {
        if (err) res.send(err);
        res.status(201).json(pessoa);
      });
    }
  }).catch(err => res.send(err));
};

exports.read_a_pessoa = (req, res) => {
  pessoa.findById(req.params.pessoaId).then(pessoa => {
    res.json(pessoa);
  }).catch(err => res.send(err));
};

exports.find_a_pessoa = (req, res) => {
  pessoa.findOne({
    tipoPessoa: req.body.tipoPessoa,
    documento: req.body.documento,
    uf: req.body.uf,
    cidade: req.body.cidade
  }).then(pessoa => {
    res.json(pessoa);
  }).catch(err => res.send(err));
};

exports.update_a_pessoa = (req, res) => {
  pessoa.findOne({documento: req.body.documento}).then(pess => {
    if(pess && pess._id != req.params.pessoaId){
      res.status(303).jsonp({message: 'CPF/CPNJ já cadastrado.'});
    } else {
      pessoa.findOneAndUpdate(
        { _id: req.params.pessoaId },
        req.body,
        { new: true }).then(pessoa => {
          res.json(pessoa);
          }).catch(err => res.send(err));
    }
  }).catch(err => res.send(err));
};

exports.delete_a_pessoa = (req, res) => {
  pessoa.deleteOne({ _id: req.params.pessoaId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Excluída com sucesso.',
     _id: req.params.pessoaId
    });
  });
};