const { Sequelize } = require('sequelize');
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
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado'
        },
        limit: 2,
        order: [['id', 'DESC']]
      });
      return res.status(200).json(listaMatriculaPorEstudante);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaCursosLotados(req, res) {
    const lotacaoCurso = 2;
    try {
      const cursosLotados = await matriculaServices.pegaEContaRegistros({
        where: {
          status: 'matriculado'
        },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCurso}`)
      });
      return res.status(200).json(cursosLotados.count);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

}

module.exports = MatriculaController;
