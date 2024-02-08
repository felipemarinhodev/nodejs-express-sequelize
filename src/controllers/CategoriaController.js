const CategoriasServices = require('../services/CategoriaServices');
const Controller = require('./Controller');

const categoriaServices = new CategoriasServices();
class CategoriaController extends Controller {
  constructor() {
    super(categoriaServices);
  }
}

module.exports = CategoriaController;
