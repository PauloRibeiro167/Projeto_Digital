import "@styles/navbar/navbar1.css";
import { Link } from "react-router-dom";
import logoDrip from "@images/logo-header.png";
import { CartContext } from "@context/cartcontext";
import React, { useState, useContext } from "react";
import Seachbar from "@components/seachbar/seachbar";
import { BtPrymary } from "@components/button/Buttons";
import ToggleTheme from "@components/button/toggletheme";
import CustomOffcanvas from "@components/cart/custonoffcanvas";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const { cartItems } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className=" py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3">
            <img src="/assets/img/logo-header (1).svg" alt="" />
          </h1>
          <div className="d-flex align-items-center w-50">
            <input
              type="search"
              className="form-control w-100 p-3"
              placeholder="Pesquisar produto..."
            />
            <img src="Search.svg" alt="" className="ms-2" />
          </div>
          <div>
            <a href="#" className="text-dark me-3">
              Cadastre-se
            </a>
            <a href="#" className="btn btn-primary">
              Entrar
            </a>
            <a href="#" className="text-dark position-relative ms-3">
              <img src="/assets/img/mini-cart.svg" alt="" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </a>
          </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center mt-5">
          <div>
            <a href="#" className="text-dark me-3">
              Cadastre-se
            </a>
            <a href="#" className="text-dark me-3">
              Produtos
            </a>
            <a href="#" className="text-dark me-3">
              Categorias
            </a>
            <a href="#" className="text-dark me-3">
              Meus Pedidos
            </a>
          </div>
        </div>
      </header>

      <CustomOffcanvas
        show={show}
        handleClose={handleClose}
        title="Carrinho de Compras"
      >
        {Array.isArray(cartItems) && cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {Array.isArray(cartItems) &&
              cartItems.map((item) => <li key={item.id}>{item.name}</li>)}
          </ul>
        )}
      </CustomOffcanvas>
    </>
  );
};

export default CustomNavbar;
