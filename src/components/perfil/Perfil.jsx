import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../db.json";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import NavbarPerfil from "../nav/NavbarPerfil";
import Proyectos from "./Proyectos";
import Tecnologia from "./Tecnologia";
import Experiencia from "./ExperienciaLaboral";
import Educacion from "./Educacion";
import Habilidad from "./Habilidad";
import Section from "./Section";

const Perfil = () => {
  const { id } = useParams();
  const data = db.users?.find((user) => user.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proyecto = data.proyectos.map((proyecto) => (
    <Proyectos key={proyecto.id} proyecto={proyecto} />
  ));

  const experienciaLaboral = data.experiencia.map((experiencia) => (
    <Experiencia key={experiencia.id} experiencia={experiencia} />
  ));

  const educacion = data.formacion.map((educacion) => (
    <Educacion key={educacion.id} educacion={educacion} />
  ));

  const tecnologias = data.skill.map((t) => (
    <Tecnologia key={t.id} nombre={t.nombre} icono={t.icono} />
  ));

  const habilidades = data.skillsoft.map((habilidad) => (
    <Habilidad key={habilidad.id} habilidad={habilidad} />
  ));

  return (
    <div id="informacion" className="flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-900 min-h-screen">
      <NavbarPerfil />
      {/* <div className="w-full h-[250px]" id="informacion">
        <img
          src="https://img.freepik.com/foto-gratis/primer-plano-pantalla-computadora-desarrollador-software-escribiendo-lenguaje-programacion-su-agencia-inicio-mostrar-concepto-ingeniero-sistemas-que-escribe-codigo-fuente-desplazamiento-texto-script-funciones-base-datos_482257-33355.jpg?w=900&t=st=1681136072~exp=1681136672~hmac=641761e19e7c3ab75a64ca9bbdf97e44992c6706c518ecf8b88daf5a1b4caf47"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="flex flex-col items-center mt-20 px-4">
  <img
    src={data.imagen}
    alt="Perfil"
    className="w-40 h-40 border-4 border-white shadow-lg rounded-full object-cover"
  />
  <div className="text-center mt-4">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
      {data.nombre} {data.apellido}
    </h2>
    <p className="text-lg text-gray-500 dark:text-gray-300">{data.profesion}</p>
    <p className="text-sm text-gray-400 dark:text-gray-500">{data.origen}</p>
  </div>
</div>

{/* Información y Contacto */}
<div className="container mx-auto px-4 sm:px-8 lg:px-16 py-6">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
    <h4 className="text-2xl text-gray-700 dark:text-gray-300 font-bold mb-6">Información</h4>
    <ul className="space-y-6">
      <li>
        <p className="font-bold text-gray-800 dark:text-gray-200">Sobre mí</p>
        <p className="text-gray-600 dark:text-gray-400">{data.descripcion}</p>
      </li>
      <li className="flex items-center space-x-4">
        <p className="font-bold text-gray-800 dark:text-gray-200">Ver CV</p>
        <a href={data.cv} target="_blank" rel="noopener noreferrer">
          <FaFilePdf className="text-red-600 hover:text-red-800" size={24} />
        </a>
      </li>
      <li className="flex items-center space-x-4">
        <p className="font-bold text-gray-800 dark:text-gray-200">Contacto</p>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 hover:text-blue-800" size={24} />
        </a>
        <a href={data.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-600 hover:text-gray-800" size={24} />
        </a>
        <a href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer">
          <AiOutlineMail className="text-gray-600 hover:text-gray-800" size={24} />
        </a>
      </li>
    </ul>
  </div>
</div>

      {/* Secciones (Proyectos, Tecnologías, etc.) */}
      <Section title="Proyectos" id="proyectos">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{proyecto}</div>
      </Section>

      <Section title="Tecnologías" id="tecnologias">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">{tecnologias}</div>
      </Section>

      <Section title="Experiencia Laboral" id="experiencia">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{experienciaLaboral}</div>
      </Section>

      <Section title="Habilidades" id="habilidades">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{habilidades}</div>
      </Section>

      <Section title="Educación" id="educacion">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{educacion}</div>
      </Section>

    </div>
  );
};



export default Perfil;
