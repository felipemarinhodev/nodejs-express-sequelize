const MatriculasServices = require('../services/MatriculaServices');
const Controller = require('./Controller');

const matriculaServices = new MatriculasServices();
class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }
}

module.exports = MatriculaController;
