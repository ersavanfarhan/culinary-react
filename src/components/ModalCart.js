import React from "react";
import { Modal, Button } from "react-bootstrap";


export default function ModalCart(props) {
  const { carts, show, closeModal } = props;
  
  if (carts) {
    return (
      <Modal show={show} onHide={closeModal} backdrop="static">
        <Modal.Header style={{ justifyContent: "center" }}>
          <Modal.Title>This feature is unavailable</Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

