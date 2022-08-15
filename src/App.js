import Header from "./components/Header";
import Bio from "./components/Bio";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Skill />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
