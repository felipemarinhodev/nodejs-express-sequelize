const { Op } = require('sequelize');
const CursosServices = require('../services/CursoServices');
const Controller = require('./Controller');

const cursoServices = new CursosServices();
class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    console.log('data_inicial', data_inicial);
    console.log('Op.gte', Op.gte);

    const where = {};

    // se existirem os params, criar uma prop {}
    data_inicial || data_final ? where.data_inicio = {} : null;
    // se existir data inicial, adiciona a prop gte com o valor
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    // se existir data final, item
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    console.log('where', where);

    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = CursoController;
