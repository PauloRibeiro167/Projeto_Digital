import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "@styles/section/Products/products.css";
import { fetchData } from "@api-tenis";
import { paths } from "@utils/paths";

const SectionProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData();
        const filteredData = data.filter(product => product.id !== 4);
        setProducts(filteredData.slice(0, 10));
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([
          {
            id: 1,
            nome: "Produto Mock",
            preco_original: 200,
            preco_desconto: 100,
            imagem_url: "https://via.placeholder.com/200",
          },
        ]);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <section className="py-2 section-categorias">
        <Container>
          <div className="row d-flex align-items-center justify-content-between mb-4" >
            <div className="col-auto">
              <h3 className="text-start text-color">Coleções em destaque</h3>
            </div>
            <div className="col-auto text-color me-3">
              <Link to="/Show_products" className="btn btn-primary">Ver todos</Link>
            </div>
          </div>
          <Row className="row-cols-2 row-cols-md-5 g-4">
            {products.map((product, index) => (
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
                        className="products-imagens py-5 p-2"
                      />
                    </div>
                    <div className="custom-body text-start">
                      <h6 className="text-muted text-color">Tênis</h6>
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
        </Container>
      </section>
    </>
  );
};

export default SectionProducts;