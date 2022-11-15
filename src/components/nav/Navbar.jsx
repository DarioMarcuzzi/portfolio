import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='contenedor-nav-principal'>
        <div className='logo-nav'>
            <h1>logo</h1>
        </div>
        <div className='btn-links-nav'>
          <Link to='/about'>
            <button>Sobre nosotros</button>
          </Link>
          <Link to='/home'>
            <button>Contacto</button>
          </Link>
        </div>
        
    </div>
  );
};

export default Navbar;