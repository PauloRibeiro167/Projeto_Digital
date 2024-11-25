// CustomNavbar.jsx
import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '@context/cartcontext';
import { useAuth } from '@context/auth';
import NavbarMobile from '@components/navbar/subcomponentes/navbarMobile.jsx';
import NavbarDesktop from '@components/navbar/subcomponentes/navbarDesktop.jsx';
import SubNavbar from '@components/navbar/subcomponentes/subNavbar.jsx';
import CartItem from '@components/cart/CartItem';
import CustomOffcanvas from '@components/cart/custonoffcanvas.jsx';
import { paths } from '@utils/paths';

const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log('Itens do carrinho:', cartItems);
  }, [cartItems]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDropdownClose = () => setShowDropdown(false);
  const handleDropdownShow = () => setShowDropdown(true);

  const filteredCartItems = Array.isArray(cartItems) ? cartItems.filter(item => item.size && item.color) : [];

  const getColorStyle = (color) => {
    return {
      backgroundColor: color,
      borderColor: color,
      color: 'red'
    };
  };

  return (
    <>
      <NavbarMobile
        showDropdown={showDropdown}
        handleDropdownShow={handleDropdownShow}
        handleDropdownClose={handleDropdownClose}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        filteredCartItems={filteredCartItems}
      />
      <NavbarDesktop
        handleShow={handleShow}
        filteredCartItems={filteredCartItems}
        isLoggedIn={isLoggedIn}
      />
      <SubNavbar />
      <CustomOffcanvas
        show={show}
        handleClose={handleClose}
        title={<i className="bi bi-cart custom-cart-icon fs-5 me-2"></i>}
        footerLink={paths.login}
        footerText="Login">

        <div className='text-color text-center mt-4'>
          {filteredCartItems.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {filteredCartItems.map((item, index) => (
                <CartItem
                  key={`${item.id}-${index}`}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  getColorStyle={getColorStyle}
                />
              ))}
            </ul>
          )}
        </div>
      </CustomOffcanvas>
    </>
  );
};

export default CustomNavbar;