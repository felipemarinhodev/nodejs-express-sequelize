const Op = require('sequelize');
const CursosServices = require('../services/CursoServices');
const Controller = require('./Controller');

const cursoServices = new CursosServices();
class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;

    const where = {};

    // se existirem os params, criar uma prop {}
    data_inicial || data_final ? where.data_inicio = {} : null;
    // se existir data inicial, adiciona a prop gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    // se existir data final, item
    data_final ? where.data_inicio[Op.lte] = data_final : null;

  }
}

module.exports = CursoController;
