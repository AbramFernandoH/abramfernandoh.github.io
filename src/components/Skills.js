import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import PilSkills from "./PilSkills";
import 'aos/dist/aos.css';
import "../css/Skills.css";

class Skills extends Component{
  constructor(props){
    super(props);
    this.state = {
      feDelay: 0,
      beDelay: 0,
      languageDelay: 0
    }
  }

  static defaultProps = {
    skills: {
      frontEnd: [ 'Html', 'Css', 'Javascript', 'React Js', 'Bootstrap' ],
      backEnd: [ 'Node Js', 'Express Js', 'MongoDB', 'Mongoose', 'Firebase', 'Git' ],
      language: [ 'Indonesian', 'English' ]
    }
  }

  componentDidMount(){
    AOS.init({
      duration: 2000,
      once: true,
      offset: 200
    });
  }

  render(){
    return(
      <section id="Skills" className="Skills d-flex flex-column justify-content-center align-items-center">
        <Container>
          <h1 className="text-center text-white mb-5 title-skills" data-aos="fade-left">Skills</h1>
          <div className="skills-border d-flex justify-content-center">
            <hr className="title-skills-border" data-aos="fade-right" />
          </div>
          {/* <Accordion className="w-100" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Front End</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col lg={6}>HTML</Col>
                  <Col lg={6}>CSS</Col>
                  <Col lg={6}>Javascript</Col>
                  <Col lg={6}>React Js</Col>
                  <Col lg={6}>Bootstrap</Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Back End</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col lg={6}>Node Js</Col>
                  <Col lg={6}>Express Js</Col>
                  <Col lg={6}>MongoDB</Col>
                  <Col lg={6}>Mongoose</Col>
                  <Col lg={6}>Firebase</Col>
                  <Col lg={6}>Git</Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Language</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col lg={6}>Indonesian</Col>
                  <Col lg={6}>English</Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
          <h3 className="text-white" data-aos="fade-left">Front End</h3>
          <Row className="gap-3 mb-5">
            {this.props.skills.frontEnd.map( skill => 
              <Col lg={2} md={3} xs={4} data-aos="fade-right">
                <PilSkills key={skill} skill={skill} />
              </Col>
            )}
          </Row>
          <h3 className="text-white" data-aos="fade-left">Back End</h3>
          <Row className="gap-3 mb-5">
            {this.props.skills.backEnd.map( skill => 
              <Col lg={2} md={3} xs={4} data-aos="fade-right">
                <PilSkills key={skill} skill={skill} />
              </Col>
            )}
          </Row>
          <h3 className="text-white" data-aos="fade-left">Language</h3>
          <Row className="gap-3 mb-5">
            {this.props.skills.language.map( skill => 
              <Col lg={2} md={3} xs={4} data-aos="fade-right">
                <PilSkills key={skill} skill={skill} />
              </Col>
            )}
          </Row>
          
          {/* {this.props.skills.frontEnd.map( skill => 
            <Card className="p-1">
              <p>{skill.name}</p>
              <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} />
            </Card>
          )} */}
          {/* {this.props.skills.backEnd.map( skill => 
            <Card className="p-1">
              <p>{skill.name}</p>
              <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} />
            </Card>
          )}
          {this.props.skills.language.map( skill => 
            <Card className="p-1">
              <p>{skill.name}</p>
              <ProgressBar now={skill.percentage} label={`${skill.percentage}%`} />
            </Card>
          )} */}
          
        </Container>
      </section>
    )
  }
}

export default Skills;