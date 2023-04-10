import React, { useState } from "react";
import { Link } from "react-scroll";
import DarkMode from "../darkMode/DarkMode";

const NavbarPerfil = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const logo = "https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"

    return (
        <nav className="bg-slate-50/40 dark:bg-slate-950/50 fixed z-10 w-full flex items-center justify-between  sm:h-16 p-4">
            <div className="flex items-center flex-shrink-0 mr-6 h-10">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 invert dark:filter-none"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        />
            </div>
            <div className="">
                <div className="hidden sm:block">
                    <div className="flex ">
                        <Link
                            to="informacion"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Informacion</button>
                        </Link>
                        <Link
                            to="tecnologias"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Tecnologias</button>
                        </Link>
                        <Link
                            to="proyectos"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Proyectos</button>
                        </Link>
                        <Link
                            to="experiencia"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Experiencia</button>
                        </Link>
                        <Link
                            to="habilidades"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Habilidades</button>
                        </Link>
                        <Link
                            to="educacion"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Educacion</button>
                        </Link>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            <div className="block sm:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            fillRule="evenodd"
                            d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="informacion"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Informacion</button>
                        </Link>
                        <Link
                            to="tecnologias"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Tecnologias</button>
                        </Link>
                        <Link
                            to="proyectos"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Proyectos</button>
                        </Link>
                        <Link
                            to="experiencia"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Experiencia</button>
                        </Link>
                        <Link
                            to="habilidades"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Habilidades</button>
                        </Link>
                        <Link
                            to="educacion"
                            smooth={true}
                            duration={500}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="block mt-4 sm:inline-block sm:mt-0 hover:border-b-2 border-black dark:border-white mr-4"
                        >
                            <button>Educacion</button>
                        </Link>
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarPerfil;