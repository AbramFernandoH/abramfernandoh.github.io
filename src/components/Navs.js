import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/Navs.css";

class Navs extends Component{
  render(){
    return(
      <nav className="Navs">
          <Navbar fixed="top" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#Home">Abram</Navbar.Brand>
              <Navbar.Toggle aria-controls="navs-top" children={<i class="fas fa-bars"></i>} />
              <Navbar.Collapse id="navs-top">
                <Nav className="ms-auto">
                  <Nav.Link href="#Home">Home</Nav.Link>
                  <Nav.Link href="#About">About</Nav.Link>
                  <Nav.Link href="#Skills">Skills</Nav.Link>
                  <Nav.Link href="#Projects">Projects</Nav.Link>
                  <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </nav>
    )
  }
}

export default Navs;