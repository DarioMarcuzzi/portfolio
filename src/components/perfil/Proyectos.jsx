import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyectos = ({ proyecto }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="flex flex-col bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4"
      key={proyecto.id}
    >
      <h4 className="text-xl text-gray-500 font-bold">{proyecto.nombre}</h4>
      <Slider {...sliderSettings}>
        {proyecto.imagen?.map((imagen) => (
          <img
            key={imagen}
            src={imagen}
            alt="img"
            className="w-full sm:w-1/2 md:w-1/3 border-4 border-white "
          />
        ))}
      </Slider>
      <ul className="mt-2 text-gray-700">
        <li className="flex border-t border-b py-2 gap-4 flex-col">
          <span className="font-bold">Descripcion</span>
          <span className="text-gray-700">{proyecto.descripcion}</span>
        </li>
        <li className="flex border-b py-2 gap-4">
          <span className="font-bold">Link</span>
          <button className="border-b-2 border-gray-500">
            <a href={proyecto.link2} target="_blank" rel="noreferrer">
              Ver online
            </a>
          </button>
          <button className="border-b-2 border-gray-500">
            <a href={proyecto.link} target="_blank" rel="noreferrer">
              Repo
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Proyectos;
