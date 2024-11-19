import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "@styles/section/Products/products.css";
import { fetchData } from "@api-tenis";

const SectionProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData(); // Fetches data from your API
        setProducts(data.slice(0, 10)); // Limits to 10 products for the grid
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        // Fallback to mock data if API call fails
        setProducts([
          {
            id: 1,
            nome: "Produto Mock",
            preco_original: 200,
            preco_desconto: 100,
            imagem_url: "https://via.placeholder.com/200",
          },
          // Add more mock data as needed
        ]);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <section className="py-5" style={{ background: "rgba(249, 248, 254, 1)" }}>
        <Container>
          <div className="row d-flex align-items-center justify-content-between mb-4" >
            <div className="col-auto">
              <h3 className="text-start">Coleções em destaque</h3>
            </div>
            <div className="col-auto">
              <a>Ver todos</a>
            </div>
          </div>
          <Row className="row-cols-2 row-cols-md-5 g-4">
            {products.map((product, index) => (
              <Col key={index}>
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
                    <h6 className="text-muted">Tênis</h6>
                    <h5 className="product-title">{product.nome}</h5>
                    <p className="price">
                      <del>${product.preco_original}</del>{" "}
                      <span className="text-descont">
                        ${product.preco_desconto}
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SectionProducts;
``;
