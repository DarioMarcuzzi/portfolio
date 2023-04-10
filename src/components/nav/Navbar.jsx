import { useState } from "react";
import { Link } from "react-scroll";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-50/40 dark:bg-slate-950/50 fixed z-10 w-full flex items-center justify-between  sm:h-16 p-4">
      <div className="flex items-center flex-shrink-0 mr-6 h-10">
        <Link to="pages" smooth={true} duration={500}>
          <button>
            <img
              src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"
              alt="Logo"
              className="h-10 invert dark:filter-none"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </button>
        </Link>
      </div>
      <div className="">
      <div className="hidden sm:block">
        <div className="flex ">
          <Link
            to="pages"
            smooth={true}
            duration={500}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
          >
            <button>Inicio</button>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
          >
            <button>Sobre nosotros</button>
          </Link>
          <Link
            to="home"
            smooth={true}
            duration={500}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
          >
            <button>Team</button>
          </Link>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      <div className="block sm:hidden ">
        <button
          onClick={toggleMenu}
          className="flex bg-gray-500 items-center px-3 py-2 border rounded border-border-gray-900  dark:border-white hover:text-white hover:border-white"
        >
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 5H3V4h14v1zm0 5H3v1h14v-1zm0 5H3v1h14v-1z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4h14v1H3V4zm0 5h14V9H3v1zm0 5h14v-1H3v1z"
              />
            )}
          </svg>
        </button>
      </div>
      {/* menu responsive */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } sm:hidden `}
      >
        <div className="text-sm sm:flex-grow ">
          <Link
            to="pages"
            smooth={true}
            duration={500}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
          >
            <button>Inicio</button>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
          >
            <button>Sobre nosotros</button>
          </Link>
          <Link
            to="home"
            smooth={true}
            duration={500}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
          >
            <button>Team</button>
          </Link>
        </div>
        <div>
          <DarkMode />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;