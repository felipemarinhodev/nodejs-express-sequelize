const PessoasServices = require('../services/PessoaServices');
const Controller = require('./Controller');

const pessoaServices = new PessoasServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      // error
    }
  }
}

module.exports = PessoaController;
