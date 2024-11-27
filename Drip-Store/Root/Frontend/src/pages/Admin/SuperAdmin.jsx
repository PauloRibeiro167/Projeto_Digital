import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CustomNbar } from '@components/navbar/nbar.jsx';
import Footer1 from '@components/footer/footer1';

const SuperAdmin = () => {
  return (
    <>
      <CustomNbar />
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Bem-vindo, Super Admin</h1>
            <p>Esta é a página de administração para super administradores.</p>
          </Col>
        </Row>
      </Container>
      <Footer1 />
    </>
  );
};

export default SuperAdmin;