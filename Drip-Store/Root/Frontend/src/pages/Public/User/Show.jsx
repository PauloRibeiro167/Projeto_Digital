// src/user/show.jsx
import '@styles/Auth/AuthPages.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useAuth } from '@context/auth';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserForm from '@components/forms/form_user.jsx';
const Footer1 = lazy(() => import('@components/footer/footer1'));
const CustomNbar = lazy(() => import('@components/navbar/nbar.jsx'));

const ShowPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user);
  }, [user]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomNbar />
      </Suspense>
      <Container className="d-flex justify-content-center align-items-center cordefundo w-100">
        <Row className="w-75 justify-content-center mb-5">
          <Col className="d-flex justify-content-center">
            <Card className="shadow-sm py-0 p-1 shadow-sm m-1 mt-5 mb-5 w-100 card">
              <Card.Body className='bg-white rounded-3 p-3'>
                <UserForm
                  formData={formData}
                  handleChange={() => {}}
                  handleSubmit={() => {}}
                  error=""
                  mode="view"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer1 />
      </Suspense>
    </>
  );
};

export default ShowPage;