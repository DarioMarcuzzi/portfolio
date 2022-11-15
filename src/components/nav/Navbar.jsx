import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='contenedor-nav-principal'>
        <div className='logo-nav'>
          <Link to='/'>
            <img src='https://res.cloudinary.com/dcpcja2qg/image/upload/v1668455340/logoDD_logj6a.png' alt='Logo'  />
          </Link>
        </div>
        <div className='btn-links-nav'>
          <Link to='/about'>
            <button>Sobre nosotros</button>
          </Link>
          <Link to='/home'>
            <button>Menu</button>
          </Link>
          <Link to='/contact'>
            <button>Contacto</button>
          </Link>
        </div>
        
    </div>
  );
};

export default Navbar;