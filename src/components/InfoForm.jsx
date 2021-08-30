import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const InfoForm = ({ infoOperaTitle }) => {
  return (
    <Form
      className="info-form"
      action="https://formspree.io/f/xoqyyjaa"
      method="POST"
    >
      <Form.Group className="mb-1" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nome"
          name="first_name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="cognome">
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cognome"
          name="last_name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" required />
      </Form.Group>
      <Form.Group className="mb-1" controlId="telefono">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="tel" placeholder="Telefono" name="phone" required />
      </Form.Group>
      <Form.Group className="mb-1" controlId="opera">
        <Form.Label>Opera</Form.Label>
        <Form.Control
          type="email"
          placeholder="Opera"
          name="opera"
          value={infoOperaTitle}
          readOnly
        />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Inviando questo modo accetto la normativa sulla privacy"
          required
          name="privacy_accepted"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default InfoForm;
