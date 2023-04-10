import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../db.json";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import NavbarPerfil from "../nav/NavbarPerfil";

const Perfil = () => {
  const { id } = useParams();
  const data = db.users?.find((user) => user.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  const proyecto = data.proyectos.map((p) => {
    return (
      <div key={p.id}
      className="flex flex-col bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4">
        <h4 className="text-xl text-gray-500 font-bold">{p.nombre}</h4>
        <div className="flex flex-row flex-wrap" >
          {p.imagen?.map((i) => {
            return (
              <img
                key={i}
                src={i}
                alt="img"
                className="w-full sm:w-1/2 md:w-1/3 border-4 border-white"
              />
            );
          })}
        </div>
        <ul className="mt-2 text-gray-700">
          <li className="flex border-t border-b py-2 gap-4 flex-col">
            <span className="font-bold">Descripcion</span>
            <span className="text-gray-700">{p.descripcion}</span>
          </li>
          <li className="flex border-b py-2 gap-4">
            <span className="font-bold">Link</span>
            <button className="border-b-2 border-gray-500">
              <a href={p.link2} target="_blank" rel="noreferrer">
                Ver más
              </a>
            </button>
          </li>
        </ul>
      </div>
    );
  });

  const experienciaLaboral = data.experiencia.map((e) => {
    return (
      <div key={e.id} className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4">
        <h4 className="text-xl text-gray-500 font-bold">{e.nombre}</h4>
        <img src={e.imagen} alt="" className="w-32 h-32" />
        <ul className="mt-2 text-gray-700">
          <li className="flex border-t border-b py-2 gap-4 flex-col">
            <span className="font-bold">Descripcion</span>
            <span className="text-gray-700">{e.descripcion}</span>
          </li>
        </ul>
      </div>
    );
  });

  const educacion = data.formacion.map((e) => {
    return (
      <div key={e.id} className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4">
        <h4 className="text-xl text-gray-500 font-bold">{e.nombre}</h4>
        <img src={e.imagen} alt="" className="w-32 h-32" />
        <ul className="mt-2 text-gray-700">
          <li className="flex border-t border-b py-2 gap-4 flex-col">
            <span className="font-bold">Descripcion</span>
            <span className="text-gray-700">{e.descripcion}</span>
            <a href={e.link} target="_blank" rel="noreferrer">
              Ver más
            </a>
          </li>
        </ul>
      </div>
    );
  });

  const tecnologias = data.skill.map((t)=>{
    return(
      <div key={t.id} className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4 justify-center">
        <h4 className="text-xl text-gray-500 font-bold">{t.nombre}</h4>
        <img src={t.icono} alt={t.nombre} className="w-32" />
      </div>
    )
  })

  const habilidades = data.skillsoft.map((h)=>{
    return(
      <div key={h.id} className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4 justify-center">
        <h4 className="text-xl text-gray-500 font-bold">{h.nombre}</h4>
        <img src={h.icono} alt={h.nombre} className="w-32" />
        </div>
    )
  })

  return (
    <div id="informacion" className="flex flex-col overflow-hidden">
    <div className="h-16">
      <NavbarPerfil />
    </div>
      <div className="w-full h-[250px]">
        <img
          src="https://img.freepik.com/foto-gratis/primer-plano-pantalla-computadora-desarrollador-software-escribiendo-lenguaje-programacion-su-agencia-inicio-mostrar-concepto-ingeniero-sistemas-que-escribe-codigo-fuente-desplazamiento-texto-script-funciones-base-datos_482257-33355.jpg?w=900&t=st=1681136072~exp=1681136672~hmac=641761e19e7c3ab75a64ca9bbdf97e44992c6706c518ecf8b88daf5a1b4caf47"
          alt="bg"
          className="w-full h-full rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="flex flex-col items-center -mt-20" data-aos="zoom-in" data-aos-duration="1000">
        <img
          src={data.imagen}
          alt="img"
          className="w-40 border-4 border-white rounded-full"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl">{data.nombre + " " + data.apellido}</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </span>
        </div>
        <p className="text-gray-700">{data.profesion}</p>
        <p className="text-sm text-gray-500">{data.origen}</p>
      </div>
      <div className="flex flex-col ">
        <div data-aos="fade-right" data-aos-duration="1000" className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col ">
            <div className="flex-1 bg-white  dark:bg-gray-800/50 rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-500 font-bold">Informacion</h4>
              <ul className="mt-2 text-gray-600">
                <li className="flex border-y py-2 gap-4 flex-col">
                  <span className="font-bold w-24">Sobre mi</span>
                  <span className="text-gray-700">{data.descripcion}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Ver CV</span>
                  {" "}
                  <a href={data.cv} target="_blank" rel="noreferrer">
                    <FaFilePdf className="icono-red" title="CV" />
                  </a>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Contacto</span>
                  <span className="text-gray-700 flex flex-wrap gap-8">
                    {" "}
                    <a href={data.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedin className="icono-red" title="Linkedin" />
                    </a>
                    <a href={data.github} target="_blank" rel="noreferrer">
                      <FaGithub className="icono-red" title="Github" />
                    </a>{" "}
                    <a
                      href={"mailto:" + data.email}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineMail className="icono-red" title="Email" />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div  id="tecnologias" data-aos="fade-right" data-aos-duration="1000" className="flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="mt-16 flex justify-center items-center">
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
            <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">
              Tecnologias
            </h2>
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {tecnologias}
            </div>
          </div>
        </div>
        <div id="proyectos" data-aos="fade-right" data-aos-duration="1000" className="flex items-center justify-center flex-col gap-4">
          <div className="mt-16 flex justify-center items-center">
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
            <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">
              Proyectos
            </h2>
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {proyecto}
            </div>
          </div>
        </div>
        <div  id="experiencia" data-aos="fade-right" data-aos-duration="1000" className="flex items-center justify-center flex-col gap-4">
          <div className="mt-16 flex justify-center items-center">
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
            <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">
              Experiencia Laboral
            </h2>
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {experienciaLaboral}
            </div>
          </div>
        </div>
        <div  id="habilidades" data-aos="fade-right" data-aos-duration="1000" className="flex items-center justify-center flex-col gap-4">
          <div className="mt-16 flex justify-center items-center">
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
            <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">
              Habilidades
            </h2>
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {habilidades}
            </div>
          </div>
        </div>
        <div id="educacion" data-aos="fade-right" data-aos-duration="1000" className="flex items-center justify-center flex-col gap-4">
          <div className="mt-16 flex justify-center items-center">
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
            <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">
              Educacion
            </h2>
            <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {educacion}
            </div>
          </div>
          <Link to="/">
            <button className="bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded-full">
              Volver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
