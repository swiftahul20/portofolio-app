import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {
  Animator,
  ScrollPage,
  ScrollContainer,
  batch,
  Fade,
  Sticky,
  MoveOut,
  MediumText,
} from "react-scroll-motion";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </>
  );
}

export default App;
