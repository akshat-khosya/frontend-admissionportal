import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Popup(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.heading}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>{props.message}</h5>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default Popup
