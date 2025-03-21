import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Proyectos = ({ proyecto }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-6 mb-4 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto overflow-hidden">
      <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 truncate">
        {proyecto.nombre}
      </h4>

      {/* Slider de Imágenes */}
      <Slider {...sliderSettings} className="mb-4">
        {proyecto.imagen?.map((imagen, index) => (
          <img
            key={index}
            src={imagen}
            alt="Imagen del proyecto"
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
          />
        ))}
      </Slider>

      {/* Descripción del Proyecto */}
      <div className="py-2 flex-grow">
        <p className="font-bold text-gray-800 dark:text-gray-200">Descripción</p>
        <p
          className={`text-gray-600 dark:text-gray-400 mt-1 ${
            showFullDescription ? "" : "line-clamp-3"
          }`}
        >
          {proyecto.descripcion}
        </p>
        {proyecto.descripcion.length > 100 && (
          <button
            onClick={toggleDescription}
            className="text-blue-600 dark:text-blue-400 hover:underline mt-2"
          >
            {showFullDescription ? "Ver menos" : "Ver más"}
          </button>
        )}
      </div>

      {/* Links del Proyecto */}
      <div className="flex items-center justify-between mt-4 border-t border-gray-300 dark:border-gray-600 pt-2">
        <span className="font-bold text-gray-800 dark:text-gray-200">Links</span>
        <div className="flex gap-4">
          <a
            href={proyecto.link2}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver online
          </a>
          <a
            href={proyecto.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
