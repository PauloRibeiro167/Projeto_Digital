class ControladorQRCode {
    constructor() {
        this.qrCodes = new Map();
    }

    async gerar_qr(pedidoId, valor) {
        try {
            // Implementação da geração do QR code
            const qrCode = `QRCode para pedido ${pedidoId} com valor ${valor}`;
            this.qrCodes.set(pedidoId, { amount: valor });
            return qrCode;
        } catch (error) {
            console.error('Erro ao gerar QR code:', error);
        }
    }

    // Valida a leitura do QR code para garantir a segurança do pagamento
    validar_qr(qrString) {
        try {
            const qrData = JSON.parse(qrString);
            const storedData = this.qrCodes.get(qrData.orderId);
            if (storedData && storedData.amount === qrData.amount) {
                console.log(`QR code para o pedido ${qrData.orderId} validado com sucesso.`);
                return true;
            } else {
                console.log(`Falha na validação do QR code para o pedido ${qrData.orderId}.`);
                return false;
            }
        } catch (error) {
            console.error('Erro ao validar QR code:', error);
            return false;
        }
    }
}

// Exemplo de uso
(async () => {
    const controladorQRCode = new ControladorQRCode();
    const qrCode = await controladorQRCode.gerar_qr(1, 100);
    console.log('QR Code:', qrCode);

    const isValid = controladorQRCode.validar_qr(JSON.stringify({ orderId: 1, amount: 100 }));
    console.log('QR Code é válido:', isValid);
})();