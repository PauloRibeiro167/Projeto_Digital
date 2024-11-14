class GerenciadorDeFunções {
  constructor() {
    this.funções = ['superadmin', 'vendedor', 'usuário'];
    this.usuários = new Map();
    this.empresas = [];
  }

  // Atribui uma função específica a um usuário
  atribuir_função(idUsuário, função) {
    if (!this.funções.includes(função)) {
      console.log(`Função ${função} não é válida.`);
      return;
    }
    this.usuários.set(idUsuário, função);
    console.log(`Função ${função} foi atribuída ao usuário ${idUsuário}.`);
  }

  // Lista todas as funções disponíveis
  listar_funções() {
    console.log("Funções disponíveis:");
    this.funções.forEach(função => {
      console.log(função);
    });
  }

  // Gerencia empresas e adiciona revendedores
  gerenciar_empresas(ação, empresa) {
    if (ação === 'adicionar') {
      this.empresas.push(empresa);
      console.log(`Empresa ${empresa.nome} foi adicionada.`);
    } else if (ação === 'remover') {
      this.empresas = this.empresas.filter(e => e.id !== empresa.id);
      console.log(`Empresa ${empresa.nome} foi removida.`);
    } else {
      console.log(`Ação ${ação} não é válida.`);
    }
  }
}

// Exemplo de uso
const controladorDeFunções = new ControladorDeFunções();
controladorDeFunções.atribuir_função(1, 'superadmin');
controladorDeFunções.atribuir_função(2, 'vendedor');
controladorDeFunções.listar_funções();
controladorDeFunções.gerenciar_empresas('adicionar', { id: 1, nome: 'Empresa 1' });
controladorDeFunções.gerenciar_empresas('remover', { id: 1, nome: 'Empresa 1' });