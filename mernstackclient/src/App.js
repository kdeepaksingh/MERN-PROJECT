import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Covid from './components/Covid'
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Switch> */}
          <Route exact path="/" element={<Home />}></Route>
          <Route  path="/about" element={<About />}> </Route>
          <Route  path="/contact" element={<Contact />}> </Route>
          <Route  path="/login" element={<Login />}> </Route>
          <Route  path="/register" element={<Signup />}> </Route>
          <Route  path="/error" element={<Errorpage />}> </Route>
          <Route  path="/covid" element={<Covid />}> </Route>
        {/* </Switch> */}
      </Routes>
    </>
  )
}

export default App;
