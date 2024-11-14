class RastreamentoCtrl {
  constructor() {
      this.rastreamentos = new Map();
  }

  // Rastreia o status do pedido com código de rastreamento
  rastrear(idPedido, info) {
      this.rastreamentos.set(idPedido, info);
      console.log(`Pedido ${idPedido} está sendo rastreado.`);
  }

  // Exibe detalhes e status de entrega atualizados
  mostrarInfo(idPedido) {
      const info = this.rastreamentos.get(idPedido);
      if (info) {
          console.log(`Status: ${info.status}`);
          console.log(`Última atualização: ${info.ultimaAtual}`);
      } else {
          console.log(`Nenhuma informação de rastreamento encontrada para o pedido ${idPedido}.`);
      }
  }
}

// Exemplo de uso
const rastreamentoCtrl = new RastreamentoCtrl();
rastreamentoCtrl.rastrear(1, { status: 'Em trânsito', ultimaAtual: '2023-10-01 10:00' });
rastreamentoCtrl.rastrear(2, { status: 'Entregue', ultimaAtual: '2023-10-02 15:00' });
rastreamentoCtrl.mostrarInfo(1);
rastreamentoCtrl.mostrarInfo(2);
rastreamentoCtrl.mostrarInfo(3);