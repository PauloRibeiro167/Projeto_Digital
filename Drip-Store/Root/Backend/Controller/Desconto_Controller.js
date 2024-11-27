class ControladorDesconto {
    constructor() {
        this.descontos = [];
    }

    // Aplica um desconto
    aplicar_desconto(desconto) {
        this.descontos.push(desconto);
        console.log(`Desconto ${desconto.code} foi aplicado.`);
    }

    // Remove um desconto
    remover_desconto(codigoDesconto) {
        this.descontos = this.descontos.filter(desconto => desconto.code !== codigoDesconto);
        console.log(`Desconto com código ${codigoDesconto} foi removido.`);
    }

    // Lista todos os descontos
    listar_descontos() {
        if (this.descontos.length === 0) {
            console.log("Nenhum desconto disponível.");
            return;
        }
        console.log("Descontos disponíveis:");
        this.descontos.forEach(desconto => {
            console.log(`Código: ${desconto.code}, Descrição: ${desconto.description}`);
        });
    }
}

// Exemplo de uso
const contrlDesconto = new ControladorDesconto();
contrlDesconto.aplicar_desconto({ code: 'DESC10', description: '10% de desconto' });
contrlDesconto.aplicar_desconto({ code: 'FRETEGRATIS', description: 'Frete grátis' });
contrlDesconto.listar_descontos();
contrlDesconto.remover_desconto('DESC10');
contrlDesconto.listar_descontos();