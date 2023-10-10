import React from "react";
import data from "../../db.json";


const About = () => {

  const { skills } = data;
  return (
    <div  id="about" className="flex items-center justify-center w-full" >
      <div className="flex w-4/5 items-center justify-center flex-col gap-8">
      <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">Sobre Nosotros</h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>
        <div className="flex flex-col justify-center ">
          <p data-aos="fade-up" data-aos-duration="1000"
            className="text-left"
          >
            Actualmente diseñamos, rediseñamos y programamos nuevos proyectos y
            aplicaciones web, ya sea del lado del cliente (Front-end, UX / UI)
            como del lado del servidor (Back-end). Continuamente aprendiendo y
            adquiriendo nuevas habilidades en función a las actuales y futuras
            demandas y tendencias tecnológicas en el campo del diseño y
            desarrollo de aplicaciones web en general. Apasionados con el
            trabajo que realizamos, ofreciendo y aportando a nuestros
            conocimientos, habilidades y experiencias, así como nuevas ideas,
            soluciones, personalización y seguimiento de calidad al cliente y su
            objetivo en cada proyecto.
          </p>
        </div>
        <div className=" flex items-center ">
          <div
            className="flex flex-col gap-2 items-center "
          >
         <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">Tecnologias utilizadas</h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>
            <div
              className="flex flex-wrap gap-8 justify-center items-center bg-gray-400 dark:bg-gray-800 rounded-lg p-4"
            >
              {skills.map((skill) => (
                <div key={skill.id} >
  <label  data-aos="zoom-in"
          data-aos-duration="2000" className="relative mr-2 decoration-none">
    <span className="tooltip" title={skill.nombre}>
      <img
      className="w-20 hover:scale-110 hover:duration-1000 hover:drop-shadow-lg dark:drop-shadow-white drop-shadow-black" src={skill.icono} alt={skill.nombre} />
    </span>
  </label>
</div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
