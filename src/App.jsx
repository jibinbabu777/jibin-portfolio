import { BrowserRouter } from "react-router-dom"; // BrowserRouter is a router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI
// in sync with the URL.

import { About, Contact, Experience, Hero, Navbar, Projects, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary dark:bg-dark-primary transition-colors duration-300'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
