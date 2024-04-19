// App.js

import './App.css';
import Main from './component/Header/Main';
import About from './component/Content/Js/About';
import Profile from './component/Content/Js/Profile';
import Experience from './component/Content/Js/Experience';
import Skill from './component/Content/Js/Skill';
import Project from './component/Content/Js/Project';
import Contact from './component/Content/Js/Contact';
import Footer from './component/Content/Js/Footer';
import { useState } from 'react';

function App() {
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const toggleBackground = () => {
    setIsBlackAndWhite(!isBlackAndWhite);
  };
  return (
    <>
      <div className={`container ${isBlackAndWhite ? 'black-and-white' : ''}`}>
        <button onClick={toggleBackground}>Toggle Background</button>
      </div>
      <div className="App">
        <Main />
        <div className="component-container">
          <About />
        </div>
        <div className="component-container">
          <Experience />
        </div>
        <div className="component-container">
          <Skill />
        </div>
        <div className="component-container">
          <Project />
        </div>
        <div className="component-container">
          <Profile />
        </div>
        <div className="component-container">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
