class Controller {
  constructor(entidadeServices) {
    this.entidadeServices = entidadeServices;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeServices.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      // erro
    }
  }
}

module.exports = Controller;
