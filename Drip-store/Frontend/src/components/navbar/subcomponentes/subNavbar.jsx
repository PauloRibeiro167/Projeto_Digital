import '@styles/navbar/navbar1.css';
import { Link } from 'react-router-dom';
import { Navbar, Dropdown } from 'react-bootstrap';


const SubNavbar = () => {
  return (
      <Navbar expand="md" className="d-none d-md-flex">
      <div className="d-flex flex-row text-center ms-5 p-1 text-color">
      <Dropdown.Item className='ms-5 me-3' as={Link} to="/">Home</Dropdown.Item>
        <Dropdown.Item className='ms-4 me-3' as={Link} to="/produtos">Produtos</Dropdown.Item>
        <Dropdown.Item className='ms-2 me-3' as={Link} to="/categorias">Categorias</Dropdown.Item>
        <Dropdown.Item className='ms-2 me-3' as={Link} to="/meus-pedidos">Meus Pedidos</Dropdown.Item>
      </div>
      </Navbar>
        );
      } 
export default SubNavbar;