import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Portfolio from './components/portfolio';
import About from './components/about';
import Projects from './components/Project'
import Contact from './components/contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      {/* <Route path='/profileinfo' element={<Portfolio/>}></Route> */}
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
