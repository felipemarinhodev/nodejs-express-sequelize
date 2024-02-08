const CursosServices = require('../services/CursoServices');
const Controller = require('./Controller');

const cursoServices = new CursosServices();
class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }
}

module.exports = CursoController;
