import React from "react";
import "./App.css";
import About from "./components/AboutMe.jsx"
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx"

function App() {

  return (  
    <>
      <h1>Profile</h1>
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
