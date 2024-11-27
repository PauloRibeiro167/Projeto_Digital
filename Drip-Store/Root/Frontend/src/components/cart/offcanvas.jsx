import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Badge } from 'react-bootstrap';
import cartIcon from '/assets/img/mini-cart.svg';

const CartIcon = ({ itemCount }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link to="#" onClick={handleShow} className="text-dark position-relative ms-3">
        <img src={cartIcon} alt="Carrinho de Compras" />
        {itemCount > 0 && (
          <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
            {itemCount}
          </Badge>
        )}
      </Link>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Seu carrinho está vazio.</p>
          <div className="mt-3">
            <Button as={Link} to="/public/payment" variant="primary" onClick={handleClose}>
              Ir para Pagamento
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CartIcon;