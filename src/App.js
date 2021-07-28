import { Component } from "react";
import Header from "./components/Header";
import Navs from "./components/Navs";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./css/App.css";

class App extends Component{
  render(){
    return(
    <div className="App">
      <Navs />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    )
  }
}

export default App;