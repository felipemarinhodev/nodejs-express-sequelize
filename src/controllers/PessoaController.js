const database = require('../models');

class PessoaController {
  static async getAll(req, res) {
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    } catch (error) {
      // erro
    }
  }
}

module.exports = PessoaController;
