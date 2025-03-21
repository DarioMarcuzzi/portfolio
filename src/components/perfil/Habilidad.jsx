import React from "react";

const Habilidad = ({ habilidad }) => {
  return (
    <div
      key={habilidad.id}
      className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-lg p-4 justify-center transform transition-transform duration-300 hover:scale-105"
    >
      {/* Título de la habilidad */}
      <h4 className="text-lg text-gray-800 dark:text-gray-200 font-semibold mb-4 text-center">
        {habilidad.nombre}
      </h4>

      {/* Icono de la habilidad */}
      <div className="flex items-center justify-center w-20 h-20 bg-indigo-500 rounded-full mb-4 shadow-xl">
        <img
          src={habilidad.icono}
          alt={habilidad.nombre}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Descripción o nivel de habilidad (opcional) */}
      {habilidad.descripcion && (
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
          {habilidad.descripcion}
        </p>
      )}
    </div>
  );
};

export default Habilidad;
