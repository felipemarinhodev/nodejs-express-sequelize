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

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeServices.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (error) {
      // error
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeServices.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (error) {
      // error
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizado = req.body;
    try {
      const foiAtualizado = await this.entidadeServices.atualizaRegistro(dadosAtualizado, Number(id));
      if (!foiAtualizado) {
        return res.status(400).json({ message: 'registro não foi atualizado' });
      }
      return res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
      // erro
    }
  }

  async exclui(req, res) {
    const { id } = req.params;

    try {
      await this.entidadeServices.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado.` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;