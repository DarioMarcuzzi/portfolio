import React from "react";
import data from "../../db.json";

const About = () => {
  const { skills } = data;

  return (
    <div
      id="about"
      className=" bg-gray-100 dark:bg-gray-900 py-14 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Sección "Sobre Nosotros" */}
          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 uppercase tracking-wider">
              Sobre Nosotros
            </h2>
            <p className="max-w-3xl text-center text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Actualmente diseñamos, rediseñamos y programamos nuevos proyectos y aplicaciones web, tanto del lado del cliente (Front-end, UX/UI) como del lado del servidor (Back-end). Continuamente aprendemos y adquirimos nuevas habilidades para adaptarnos a las demandas y tendencias tecnológicas en el diseño y desarrollo de aplicaciones web. Somos apasionados con nuestro trabajo, y nos enfocamos en brindar conocimientos, habilidades y experiencia, así como ideas innovadoras, soluciones personalizadas y un seguimiento de calidad en cada proyecto.
            </p>
          </div>

          {/* Sección "Tecnologías Utilizadas" */}
          
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título principal */}
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 uppercase tracking-wider">
          Tecnologías Utilizadas
        </h2>

        {/* Descripción breve */}
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          En cada proyecto integramos las últimas tecnologías para garantizar la
          eficiencia y la calidad de nuestras soluciones.
        </p>

        {/* Grid de “tarjetas” para cada tecnología */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={skill.icono}
                alt={skill.nombre}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {skill.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
      </div>
    </div>
  );
};

export default About;
