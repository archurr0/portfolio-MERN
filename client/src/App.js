import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Home} from './pages/Home';
import {AboutMe} from './pages/AboutMe';
import {Projects} from './pages/Projects';
import {Contact} from './pages/Contact';

function App() {
  return (
    <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/Home"  element={<Home/>} />
      <Route path="/AboutMe"  element={<AboutMe />}/>
      <Route path="/Projects"  element={<Projects/>}/>
      <Route path="/Contact"  element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
