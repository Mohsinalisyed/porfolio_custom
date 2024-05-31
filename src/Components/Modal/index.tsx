import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {SiWhatsapp} from 'react-icons/si'
import './style.scss'
const ModalComp = (props:any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className="whats-app-btn">
        <span className="whats-app-icon"><SiWhatsapp/></span>  {props.buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        className={props.className}
      >
        <ModalHeader toggle={toggle}>
             <h4 className="text-primary">Contact Modal </h4>
            </ModalHeader>
        <ModalBody>
         {props.children}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComp;