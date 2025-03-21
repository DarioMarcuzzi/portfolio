import { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser } from "react-icons/fa";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  const [active, setActive] = useState("pages");

  const handleActive = (section) => {
    setActive(section);
  };

  return (
    <>
      {/* Navbar Principal */}
      <nav className="fixed z-10 w-full flex items-center justify-between p-4 sm:h-16 bg-slate-50/40 backdrop-blur-xl dark:bg-slate-950/50">
        <div className="flex items-center flex-shrink-0 mr-6 h-10">
          <Link to="pages" smooth={true} duration={500}>
            <button>
              <img
                src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"
                alt="Logo"
                className="h-10 w-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg "
              />
            </button>
          </Link>
        </div>

        <div className="hidden sm:flex items-center space-x-4 bg-gray-200/50 rounded-full shadow-lg">
          <Link
            to="pages"
            smooth={true}
            duration={500}
            className={`${
              active === "pages" ? "dark:bg-white dark:text-gray-900 bg-dark text-white" : ""
            } px-4 py-2 rounded-full font-semibold`}
            onClick={() => handleActive("pages")}
            onSetActive={() => handleActive("pages")}
          >
            <button>Inicio</button>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`${
              active === "about" ? "dark:bg-white dark:text-gray-900 bg-dark text-white" : ""
            } px-4 py-2 rounded-full font-semibold`}
            onClick={() => handleActive("about")}
            onSetActive={() => handleActive("about")}
          >
            <button>Sobre nosotros</button>
          </Link>
        </div>
        <div>
          <DarkMode />
        </div>
      </nav>
      {/* Barra de Navegación Inferior para Móviles */}
      <div className="fixed z-10 bottom-0 left-0 right-0 bg-gray-200 dark:bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex justify-around items-center shadow-lg rounded-t-3xl sm:hidden">
      <Link
        to="pages"
        smooth={true}
        duration={500}>
          <button
            onClick={() => handleActive("pages")}
            className={`flex flex-col items-center ${
              active === "pages" ? "text-dark dark:text-white" : "text-gray-500 dark:text-gray-500"
            }`}
          >
            <FaHome className="h-6 w-6" />
            Inicio
          </button>
        </Link>
        
        <Link
          to="about"
          smooth={true}
          duration={500}>
          <button
            onClick={() => handleActive("about")}
            className={`flex flex-col items-center ${
              active === "about" ? "text-dark dark:text-white" : "text-gray-500 dark:text-gray-500"
            }`}>
            <FaUser className="h-6 w-6" />
            Sobre nosotros
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
