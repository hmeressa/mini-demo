// import './App.css';
import About from './component/Content/Js/About';
import Contact from './component/Content/Js/Contact';
import Experience from './component/Content/Js/Experience';
import Profile from './component/Content/Js/Profile';
import Project from './component/Content/Js/Project';
import Skill from './component/Content/Js/Skill';
import Main from './component/Header/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <br></br>
      <br></br>
      <br></br>
      <About />
      <Profile/>
      <Experience />
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
