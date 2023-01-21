import Button from "@mui/material/Button";
import * as React from 'react';

import Modal from 'react-bootstrap/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default class ModalBasico extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      open:false
    }
  }

 handleClose = () => this.setState({open:!this.props.open});
 handleShow = () => this.setState({open:this.props.open});

render(){
  return (
   
    <Modal
    show={this.handleShow}
    onHide={this.handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>{this.props.titulo}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {this.props.cuerpo}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={this.handleClose}>
        Close
      </Button>
      <Button variant="primary">Understood</Button>
    </Modal.Footer>
  </Modal>
   
  );
}
}