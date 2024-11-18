import React, { useState } from 'react';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('boleto'); 
  const handlePaymentMethodChange = (event) => setPaymentMethod(event.target.value);

  return (
    <div className="w-100">
      <CustomNavbar />
      <h2>Finalizar Pagamento</h2>

      
      <section className="container col-6 text-start">
        <p>Informações Pessoais</p>
        <hr />
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nome Completo*</label>
            <input type="text" className="form-control" id="name" placeholder="Insira seu nome" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpf" className="form-label">CPF*</label>
            <input type="text" className="form-control" id="cpf" placeholder="Insira seu CPF" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail*</label>
            <input type="email" className="form-control" id="email" placeholder="Insira seu email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Celular*</label>
            <input type="tel" className="form-control" id="phone" placeholder="Insira seu celular" required />
          </div>
        </form>
      </section>

      
      <section className="container col-6 text-start">
        <p>Informações de Entrega</p>
        <hr />
        <form>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Endereço*</label>
            <input type="text" className="form-control" id="address" placeholder="Insira seu endereço" required />
          </div>
          <div className="mb-3">
            <label htmlFor="neighborhood" className="form-label">Bairro*</label>
            <input type="text" className="form-control" id="neighborhood" placeholder="Insira seu bairro" required />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">Cidade*</label>
            <input type="text" className="form-control" id="city" placeholder="Insira sua cidade" required />
          </div>
          <div className="mb-3">
            <label htmlFor="zip" className="form-label">CEP*</label>
            <input type="text" className="form-control" id="zip" placeholder="Insira seu cep" required />
          </div>
          <div className="mb-3">
            <label htmlFor="complement" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="complement" placeholder="Insira complemento" />
          </div>
        </form>
      </section>

      
      <section className="container col-6 text-start">
        <p>Informações de Pagamento</p>
        <hr />
        <form className="d-flex justify-content-start">
          
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="creditCard"
              value="cartao"
              checked={paymentMethod === 'cartao'}
              onChange={handlePaymentMethodChange}
            />
            <label className="form-check-label" htmlFor="creditCard">Cartão de Crédito</label>
          </div>
          <div className="form-check ms-4">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="boleto"
              value="boleto"
              checked={paymentMethod === 'boleto'}
              onChange={handlePaymentMethodChange}
            />
            <label className="form-check-label" htmlFor="boleto">Boleto Bancário</label>
          </div>
        </form>

        {paymentMethod === 'cartao' && (
          <form>
            <div className="mb-3">
              <label htmlFor="cardName" className="form-label">Nome do Cartão*</label>
              <input type="text" className="form-control" id="cardName" placeholder="Insira o nome do cartão" required />
            </div>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Número do Cartão*</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="Insira o número do cartão"
                pattern="\d{16}" 
                maxLength="16"   
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="expirationDate" className="form-label">Data de validade*</label>
              <input
                type="month"
                className="form-control"
                id="expirationDate"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV*</label>
              <input
                type="password"
                className="form-control"
                id="cvv"
                placeholder="CVV"
                pattern="\d{3,4}" 
                maxLength="4"     
                required
              />
            </div>
          </form>
        )}
      </section>
      <div className='container col-6 text-start'>
      <h4>Total</h4>
      </div>
      <div className='container col-6 text-end'>
        <h5>Valor</h5>
      </div>
      <section className="container col-6 text-start">
        
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </section>

      <Footer1 />
    </div>
  );
};

export default PaymentPage;
