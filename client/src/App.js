import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/index.css"
import Home from "./components/Home";
import About from "./components/About";
import ParticlesBackground from "./config/ParticlesBackground";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <Router basename="rjlportfolio.onrender.com">
      <div className="App custom-background">
        <Header />
        <Routes>
         
  <Route path="/about" element={<About />} />
        
  <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
         
  <Route path="/contact" element={<Contact />} />
        </Routes>
        <ParticlesBackground />
        <Footer />
      </div>
    </Router>
  );
}
