import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="contenedor-nav-principal">
      <div className="logo-nav">
        <Link to="landing" smooth={true} duration={500}>
          <img
            src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="btn-links-nav">
        <Link to="about" smooth={true} duration={500}>
          <button>Sobre nosotros</button>
        </Link>
        <Link to="home" smooth={true} duration={500}>
          <button>Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
