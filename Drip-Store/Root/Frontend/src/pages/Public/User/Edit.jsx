// src/user/edit.jsx
import '@styles/Auth/AuthPages.css';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useAuth } from '@context/auth';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import UserForm from '@components/forms/form_user.jsx';

const Footer1 = lazy(() => import('@components/footer/footer1'));
const CustomNbar = lazy(() => import('@components/navbar/nbar.jsx'));

const EditUserPage = () => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState(user || {});
  const [error, setError] = useState('');

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
    } catch (err) {
      setError('Erro ao atualizar. Por favor, tente novamente.');
    }
  };

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
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  error={error}
                  mode="edit"
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

export default EditUserPage;