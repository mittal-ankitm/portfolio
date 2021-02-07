import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import Card from './comp/card';
import Intro from './comp/intro';
import Connect from './comp/connect';
import Publication from './comp/publication';
import Projects from './comp/projects';
import Experience from './comp/experience';
import Edu from './comp/edu';
import Navb from './comp/navbar'
import Footer from './comp/footer'
import './comp/style.css'
function App() {
  return (
    <div>

    <Navb />
    <Intro />
    <Experience />
    <Edu />
    <Card />
    <Projects />
    <Publication />
    <Footer />
      
    </div>
  );
}

export default App;
