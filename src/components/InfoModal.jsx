import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import InfoForm from "./InfoForm";
import { ShopContext } from "../context/ShopContext";

const InfoModal = () => {
  const { isInfoModalActive, closeInfoModal, infoOperaTitle } =
    useContext(ShopContext);

  return (
    <Modal
      show={isInfoModalActive}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="info-modal"
      onHide={closeInfoModal}
    >
      <Modal.Header closeButton onClick={closeInfoModal}>
        <Modal.Title id="contained-modal-title-vcenter">
          Richiedi pi&ugrave; informazioni
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Siamo lieti di aiutarla.</h4>
        <p>Compili questo modulo per avere più informazioni.</p>
        <InfoForm infoOperaTitle={infoOperaTitle} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeInfoModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
