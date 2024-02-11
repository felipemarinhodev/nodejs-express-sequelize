const PessoasServices = require('../services/PessoaServices');
const Controller = require('./Controller');

const pessoaServices = new PessoasServices();
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaTodasMatriculasPorEstudante(Number(estudante_id));
      return res.status(200).json(listaMatriculas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaPessoas = await pessoaServices.pegarPessoasEscopoTodos();
      return res.status(200).json(listaPessoas);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = PessoaController;
