import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Contact.css";

class Contact extends Component{
  componentDidMount(){
    AOS.init({
      duration: 2000,
      once: true
    });
  }

  render(){
    return(
      <section id="Contact" className="Contact">
        <Container fluid>
          <h1 className="text-center" data-aos="fade-up">Contact</h1>
          <Row className="contact-main d-flex flex-lg-row flex-column-reverse">
            <Col lg={4} className="contact-info text-white fw-bold d-flex flex-lg-column justify-content-lg-around justify-content-md-between align-items-md-start flex-md-row flex-column justify-content-center align-items-center" data-aos="fade-right">
              <p><i className="fab fa-whatsapp"></i> (+62) 896 1771 5065</p>
              <p><i className="far fa-envelope"></i> abramfernando18@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i>  Bekasi, West Java, Indonesia</p>
            </Col>
            <Col xl={5} lg={6} className="contact-form offset-lg-1" data-aos="fade-left">
              <Form className="contanct-form" action="https://formsubmit.co/abramfernando18@gmail.com" method="POST">
                <Row>
                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control name="name" type="text" placeholder="John Doe" autoComplete="off" />
                    </Form.Group>
                  </Col>  

                  <Col lg={12}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control name="email" type="email" placeholder="youremail@mail.com" autoComplete="off" />
                    </Form.Group>
                  </Col> 

                  <Col lg={12}>
                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control name="message" as="textarea" rows={3} />
                    </Form.Group>
                  </Col>
                  
                  <input type="hidden" name="_template" value="table" />

                </Row>
                <Form.Group className="d-flex justify-content-center align-items-center">
                  <Button className="contact-btn" size="lg" type="submit">Send</Button>
                </Form.Group>
                
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Contact;