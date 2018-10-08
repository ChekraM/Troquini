import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./MessageForm.css";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <button type="button" onClick={this.toggle} className="negociate-btn">
          <img
            src="/negociate-icon.png"
            alt="negociate-icon"
            className="negociate-icon"
          />
          <h5 style={{ marginBottom: "0px" }}>NÉGOCIER</h5>
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn} className="modal-header">
            Envoyer un message privé
          </ModalHeader>
          <ModalBody>
            <Label for="exampleText">Négocier le troc ici :</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </ModalBody>
          <ModalFooter>
            <button
              type="button"
              className="negociate-btn green-color"
              onClick={this.toggle}
            >
              Envoyer
            </button>{" "}
            <button
              type="button"
              className="negociate-btn red-color"
              onClick={this.toggle}
            >
              Annuler
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MessageForm;
