const Services = require('./Services.js');

class PessoasServices extends Services {
  constructor() {
    super('Pessoa');
  }

  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegarPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosRegistros');
    return listaPessoas;
  }
}

module.exports = PessoasServices;
