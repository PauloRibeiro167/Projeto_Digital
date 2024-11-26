class Pagamento_controller {
    constructor() {
        this.pagamentos = [];
    }

    // Processa um pagamento
    processar_pagamento(pagamento) {
        this.pagamentos.push({ ...pagamento, status: 'pendente' });
        console.log(`Pagamento de ${pagamento.amount} foi processado.`);
    }

    // Confirma um pagamento
    confirmar_pagamento(pagamentoId) {
        const pagamento = this.pagamentos.find(p => p.id === pagamentoId);
        if (pagamento) {
            pagamento.status = 'confirmado';
            console.log(`Pagamento com id ${pagamentoId} foi confirmado.`);
        } else {
            console.log(`Pagamento com id ${pagamentoId} não encontrado.`);
        }
    }
}

// Exemplo de uso
const controladorPagamento = new ControladorPagamento();
controladorPagamento.processar_pagamento({ id: 1, amount: 100 });
controladorPagamento.processar_pagamento({ id: 2, amount: 200 });
controladorPagamento.confirmar_pagamento(1);
controladorPagamento.confirmar_pagamento(3);