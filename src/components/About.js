import { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutMePhoto from "../img/aboutMePhoto.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import "../css/About.css";

class About extends Component{
  componentDidMount(){
    AOS.init({
      duration: 2000,
      once: true,
      offset: 300
    });
  }
  
  render(){
    return(
      <section className="About" id="About">
        <Container>
        <h1 className="text-white text-center" data-aos="fade-up">About Me</h1>
          <Row>
            <Col className="about-img d-flex justify-content-center align-items-center" md={6}>
              <Image src={aboutMePhoto} alt="aboutme photo" data-aos="fade-up" data-aos-offset="100" />
            </Col>
            <Col className="about-text d-flex flex-column justify-content-center" md={6} data-aos="fade-up">
              <p className="text-white text-justify">First of all I want to thanks for your attention. I'm 21 years old and I am a programmer. I was fresh graduated of CCIT Fakultas Teknik Universitas Indonesia. I like to learn new things about programming from everyone, and anywhere. I'm very passionate in building career in computer field.</p>
              <p className="text-white text-justify">I was good at making webapp. I learn from experiences and mistakes. I can work in agile environment and work together in teams. I'm  diligent, hard worker, and loyal person.</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default About;