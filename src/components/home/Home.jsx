import React from 'react';
import Nav from "../nav/Navbar.jsx"
import "./home.css"


const Home = () => {
  return (
    <div className='contenedor-principal-home'>
      <div>
        <Nav/>  
      </div>
      <div className='contenedor-contacto'>
        <div className='contacto-dario'>
          <h1>contacto dario</h1>
        </div>
        <div className='contacto-daiana'>
          <h1>contacto daiana</h1>
        </div>
      </div>
      <div className='footer-home'>
        <h1>footer</h1>
      </div>
      
    </div>
  );
};

export default Home;