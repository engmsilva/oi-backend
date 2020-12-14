const pessoaBuilder = require('../controllers/pessoaController');
const captchaBuilder = require('../controllers/captchaController');
const ufBuilder = require('../controllers/ufController');

module.exports = app => {
  app
    .route('/pessoas')
    .get(pessoaBuilder.list_all_pessoas)
    .post(pessoaBuilder.create_a_pessoa);

    app
    .route('/buscar/pessoas')
    .post(pessoaBuilder.find_a_pessoa)

  app
    .route('/pessoas/:pessoaId')
    .get(pessoaBuilder.read_a_pessoa)
    .put(pessoaBuilder.update_a_pessoa)
    .delete(pessoaBuilder.delete_a_pessoa);

  app
    .route('/captcha')
    .post(captchaBuilder.verification)

  app
    .route('/uf')
    .get(ufBuilder.list_all_uf)
};