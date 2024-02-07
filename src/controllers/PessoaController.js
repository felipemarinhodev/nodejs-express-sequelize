const PessoasServices = require('../services/PessoaServices');
const Controller = require('./Controller');

const pessoaServices = new PessoasServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }
}

module.exports = PessoaController;
