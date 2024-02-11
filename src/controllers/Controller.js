const converteIds = require('../utils/conversorDeStringHelper');

class Controller {
  constructor(entidadeServices) {
    this.entidadeServices = entidadeServices;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeServices.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeServices.pegaUmRegistroPorId(Number(id));
      return res.status(200).json(umRegistro);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaUm(req, res) {
    const { ...params } = req.params;
    const where = converteIds(params);
    try {
      const umRegistro = await this.entidadeServices.pegaUmRegistro(where);
      return res.status(200).json(umRegistro);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeServices.criaRegistro(dadosParaCriacao);
      return res.status(200).json(novoRegistroCriado);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const dadosAtualizado = req.body;

    const where = converteIds(id);
    try {
      const foiAtualizado = await this.entidadeServices.atualizaRegistro(dadosAtualizado, where);
      if (!foiAtualizado) {
        return res.status(400).json({ message: 'registro não foi atualizado' });
      }
      return res.status(200).json({ message: 'Atualizado com sucesso' });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    const where = converteIds(id);

    try {
      await this.entidadeServices.excluiRegistro(where);
      return res.status(200).json({ mensagem: `id ${id} deletado.` });
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = Controller;
