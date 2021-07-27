import { Component } from "react";
import { Card, Button, Modal, Image } from "react-bootstrap";
import "../css/CardProject.css";

class CardProject extends Component{
  render(){
    return(
      <div className="CardProject mb-3">
        <Card>
          <Card.Img variant="top" src={this.props.imgSrc} />
          <Card.Body>
            <Card.Title className="fw-bolder">{this.props.title}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            <button className="details-btn" onClick={this.props.handleShow}>See Details</button>
          </Card.Body>
        </Card>

        <Modal show={this.props.show} onHide={this.props.handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={this.props.modalImg} className="modal-img" />{' '}
            {this.props.techStack}<br/><br/>
            {this.props.text}
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-seeRepo">
              <a href={this.props.repoLink} target="_blank" rel="noreferrer">
                <i class="fab fa-github"></i> See Repository
              </a>
            </Button>
            <Button className="btn-seeWeb" variant="success">
              <a href={this.props.webLink} target="_blank" rel="noreferrer">
                <i class="fas fa-external-link-alt"></i> See Website
              </a>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default CardProject;