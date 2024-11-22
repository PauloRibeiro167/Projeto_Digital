import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CustomNavbar from '@components/navbar/navbar1';
import Footer1 from '@components/footer/footer1';
import { fetchData } from '@api-tenis';
import '@styles/pages/showProducts.css';
import { paths } from '@utils/paths';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    marca: '',
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData();
        const filteredData = data.filter((product) => product.id !== 4); 
        setProducts(filteredData);
        setFilteredProducts(filteredData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    getProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { id } = e.target;
    setFilters({ marca: id });
  };

  const sortByLowestPrice = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => a.preco_desconto - b.preco_desconto);
    setFilteredProducts(sortedProducts);
  };

  const sortByHighestPrice = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => b.preco_desconto - a.preco_desconto);
    setFilteredProducts(sortedProducts);
  };

  const getLowestPrice = () => {
    if (filteredProducts.length === 0) return null;
    return Math.min(...filteredProducts.map(product => product.preco_desconto));
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      if (filters.marca) {
        filtered = filtered.filter((product) => product.marca === filters.marca);
      }

      setFilteredProducts(filtered.slice(0, 9));
    };

    applyFilters();
  }, [filters, products]);

  const renderProducts = () => {
    return (
      <Row className="row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map((product, index) => (
          <Col key={index}>
            <Link to={`${paths.show_products}/${product.id}`} className="text-decoration-none">
              <div className="custom-card">
                <div className="image-container">
                  {product.preco_desconto && (
                    <div className="discount-badge">
                      {Math.round(
                        ((product.preco_original - product.preco_desconto) /
                          product.preco_original) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                  <img
                    src={
                      product.imagem_url || "https://via.placeholder.com/200"
                    }
                    alt={product.nome}
                    className="product-image"
                  />
                </div>
                <div className="custom-body text-start">
                  <h6 className=" text-color">{product.modelo}</h6>
                  <h5 className="product-title text-color">{product.nome}</h5>
                  <p className="price">
                    <del>${product.preco_original}</del>{" "}
                    <span className="text-descont text-danger fw-bold">
                      ${product.preco_desconto}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <>
      <CustomNavbar className="text-color w-100" />

      <main className="container-fluid background text-color p-5 py-5">
        <section className="w-100">
          <div className="d-flex justify-content-between mb-3">
            <h6>Resultados para “Ténis” - {filteredProducts.length} produtos</h6>
            <Form.Select className="w-auto" onChange={(e) => {
              if (e.target.value === 'menor preço') {
                sortByLowestPrice();
              } else if (e.target.value === 'maior preço') {
                sortByHighestPrice();
              }
            }}>
              <option>Ordenar por: mais relevantes</option>
              <option value="menor preço">Ordenar por: menor preço</option>
              <option value="maior preço">Ordenar por: maior preço</option>
            </Form.Select>
          </div>

          <div className="row">
            <aside className="col-lg-3">
              <div className="sidebar">
                <h5>Filtrar por</h5>
                <hr />
                <h6 className="mt-4">Marca</h6>
                <Form.Check type="radio" id="Adidas" name="marca" label="Adidas" checked={filters.marca === 'Adidas'} onChange={handleFilterChange} />
                <Form.Check type="radio" id="Puma" name="marca" label="Puma" checked={filters.marca === 'Puma'} onChange={handleFilterChange} />
                <Form.Check type="radio" id="Mizuno" name="marca" label="Mizuno" checked={filters.marca === 'Mizuno'} onChange={handleFilterChange} />
              </div>
              <Card bg="secondary" text="white" className="mt-4">
                <Card.Body>
                  <Card.Title>Informações</Card.Title>
                  <Card.Text className='text-color'>
                    Use os filtros acima para selecionar os produtos de sua preferência.
                  </Card.Text>
                  <Card.Text className='text-color'>
                    Menor preço: ${getLowestPrice()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </aside>

            <section className="col-lg-9">
              {renderProducts()}
            </section>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
};

export default ShowProducts;