import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import CardProject from "./CardProjects";
import homesubImg from "../img/homeSub.png";
import homesubGif from "../img/homeSub-gif.gif";
import cateringImg from "../img/catering.png";
import cateringGif from "../img/catering-gif.gif";
import simonGameImg from "../img/simonGame.png";
import simonGameGif from "../img/simonGame-gif.gif";
import calcReactImg from "../img/calcReactjs.png";
import calcReactGif from "../img/calcReactjs-gif.gif";
import "aos/dist/aos.css";
import "../css/Projects.css";

class Projects extends Component{
  constructor(props){
    super(props);
    this.state = {
      modal: {
        homesub: false,
        catering: false,
        simonGame: false,
        calcReact: false
      }
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){
    AOS.init({
      duration: 2000,
      once: true
    });
  }

  async handleShow(st){
    switch (st) {
      case 'homesub':
        await this.setState(curState => ({ modal: {...this.state.modal, homesub: true} }));
        break;

      case 'catering':
        await this.setState(curState => ({ modal: {...this.state.modal, catering: true} }));
        break;

      case 'simonGame':
        await this.setState(curState => ({ modal: {...this.state.modal, simonGame: true} }));
        break;

      case 'calcReact':
        await this.setState(curState => ({ modal: {...this.state.modal, calcReact: true} }));
        break;
    
      default:
        break;
    }
  }

  async handleClose(st){
    switch (st) {
      case 'homesub':
        await this.setState(curState => ({ modal: {...this.state.modal, homesub: false} }));
        break;

      case 'catering':
        await this.setState(curState => ({ modal: {...this.state.modal, catering: false} }));
        break;

      case 'simonGame':
        await this.setState(curState => ({ modal: {...this.state.modal, simonGame: false} }));
        break;

      case 'calcReact':
        await this.setState(curState => ({ modal: {...this.state.modal, calcReact: false} }));
        break;
    
      default:
        break;
    }
  }

  render(){
    return(
      <section className="Projects" id="Projects">
        <Container>
          <h1 className="text-center text-white" data-aos="fade-up">Projects</h1>
          <Row data-aos="fade-up">
            <Col xl={3} md={6} className="homesub">
              <CardProject
                imgSrc={homesubImg}
                title="HomeSub"
                techStack='Javascript, Firebase (Realtime Database), Google OAuth'
                text='User can download, search, and request various movies subtitles. There is also Google OAuth that required user to login with their google account.'
                show={this.state.modal.homesub}
                handleShow={() => this.handleShow('homesub')}
                handleClose={() => this.handleClose('homesub')}
                modalImg={homesubGif}
                repoLink='https://github.com/AbramFernandoH/Homesub/tree/master'
                webLink='https://homesub2020.herokuapp.com/'
              />
            </Col>
            <Col xl={3} md={6} className="catering-project">
              <CardProject
                imgSrc={cateringImg}
                title="Catering"
                techStack='Node Js, Express Js, MongoDB, Mongoose, Passport JS, Xendit (for payment gateway), cloudinary, moment'
                text='User have to make an account or login to order various catering menu and pay it using creadit / debit card, ewallet (ovo), or cash on delivery.'
                show={this.state.modal.catering}
                handleShow={() => this.handleShow('catering')}
                handleClose={() => this.handleClose('catering')}
                modalImg={cateringGif}
                repoLink='https://github.com/AbramFernandoH/catering-project'
                webLink='https://catering-project.herokuapp.com/'
              />
            </Col>
            <Col xl={3} md={6} className="the-simon-game">
              <CardProject
                imgSrc={simonGameImg}
                title="The Simon Game"
                techStack='React Js'
                text='User can play simon game, if they remember the sequence of colors right then level will increase, if not then it is game over and the game will restart all over again.'
                show={this.state.modal.simonGame}
                handleShow={() => this.handleShow('simonGame')}
                handleClose={() => this.handleClose('simonGame')}
                modalImg={simonGameGif}
                repoLink='https://github.com/AbramFernandoH/simon-game-reactjs'
                webLink='https://abramfernandoh.github.io/simon-game-reactjs/'
              />
            </Col>
            <Col xl={3} md={6} className="reactjs-calculator">
              <CardProject
                imgSrc={calcReactImg}
                title="Reactjs Calculator"
                techStack='React Js'
                text='User can subtract, adding, multiply, and divide between two numbers. User also can do such thing in decimal number for one or both numbers.'
                show={this.state.modal.calcReact}
                handleShow={() => this.handleShow('calcReact')}
                handleClose={() => this.handleClose('calcReact')}
                modalImg={calcReactGif}
                repoLink='https://github.com/AbramFernandoH/calculator-reactjs'
                webLink='https://abramfernandoh.github.io/calculator-reactjs/'
              />
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default Projects;