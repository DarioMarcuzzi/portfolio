import React from "react";

const Educacion = ({ educacion }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
      {/* Título de la educación */}
      <h4 className="text-lg text-gray-800 dark:text-gray-200 font-semibold mb-4 text-center">
        {educacion.nombre}
      </h4>

      {/* Imagen de la educación */}
      <img
        src={educacion.imagen}
        alt={educacion.nombre}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Descripción de la educación */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        <p className="font-semibold text-gray-800 dark:text-gray-200">Descripción</p>
        <p>{educacion.descripcion}</p>
      </div>

      {/* Enlace para ver más */}
      <a
        href={educacion.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline mt-2"
      >
        Ver más
      </a>
    </div>
  );
};

export default Educacion;
