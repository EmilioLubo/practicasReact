import React from "react";
import {Link} from "react-router-dom";
import {Form, Button, Container} from 'react-bootstrap';

function Register() {
    return (
      <Container className='mt-5'>
          <Form className='container d-flex flex-column'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="d-flex align-self-end" variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
      </Container>
    );
}

export default Register;