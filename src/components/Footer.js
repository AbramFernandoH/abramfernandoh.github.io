import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

class Footer extends Component{
  render(){
    return(
      <footer className="Footer text-white">
        <Container>
          <Row className="text-center">
            <Col lg={3}>
              <p><i className="fab fa-linkedin"></i> Abram Fernando Haullussy</p>
            </Col>
            <Col lg={6}>
              <p><span className="footer-copyright">©</span> by Abram Fernando Haullussy 2021</p>
            </Col>
            <Col lg={3}>
              <p><i className="fab fa-github"></i> AbramFernandoH</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer;