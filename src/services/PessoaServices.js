const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoasServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula');
  }

  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }

  async pegaTodasMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    const listaMatriculas = await estudante.getTodasMatriculas();
    return listaMatriculas;
  }

  async pegarPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosRegistros');
    return listaPessoas;
  }

  async cancelaPessoaEMatriculas(estudanteId) {
    return dataSource.sequelize.transaction(async (transation) => {
      await super.atualizaRegistro(
        { ativo: false },
        { id: estudanteId },
        transation
      );
      await this.matriculaServices.atualizaRegistro(
        { status: 'cancelado' },
        { estudante_id: estudanteId },
        transation
      );
    });
  }
}

module.exports = PessoasServices;
