//imports
import { BrowserRouter } from "react-router-dom";

//import components
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  //wrap in a browser router component
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
