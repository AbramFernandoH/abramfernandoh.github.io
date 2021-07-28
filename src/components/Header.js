import { Component } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import AOS from "aos";
import headerPhoto from "../img/headerPhoto.png";
import headerPhotoWebp from "../img/headerPhoto-webp.webp";
import "aos/dist/aos.css";
import "../css/Header.css";

class Header extends Component{
  componentDidMount(){
    AOS.init({
      duration: 2000,
      once: true
    });
  }

  render(){
    return(
      <header id="Home" className="Header">
        <Container>
          <Row className="vh-100">
            <Col lg={7} className="header-text d-flex flex-column justify-content-center" data-aos="fade-right">
              <h1 className="text-white fw-light" data-aos-delay="100"><span>Hello</span>, I'm</h1>
              <h1 className="text-white" data-aos-delay="150">Abram Fernando Haullussy</h1>
              <p data-aos-delay="200">a Fullstack Web Developer</p>
              <Button variant="outline-light header-btn" size="lg" href="#Projects" data-aos-delay="250">See my works</Button>
              {/* <div className="header-socials d-flex align-self-end">
                <Button href="https://github.com/AbramFernandoH"><i className="fab fa-github"></i></Button>
                <Button href=""><i className="fab fa-linkedin"></i></Button>
              </div> */}
            </Col>
            <Col lg={5} className="header-pic d-flex flex-column-reverse">
              <Image src={headerPhotoWebp || headerPhoto} data-aos="fade-up" data-aos-delay="300" />
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Header;