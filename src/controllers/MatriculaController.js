const MatriculasServices = require('../services/MatriculaServices');
const Controller = require('./Controller');

const matriculaServices = new MatriculasServices();
class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }

  async pegaMatriculasPorEstudante(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculaPorEstudante = await matriculaServices.pegaEContaRegistros({
        estudante_id: Number(estudante_id),
        status: 'matriculado'
      });
      return res.status(200).json(listaMatriculaPorEstudante);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

}

module.exports = MatriculaController;
