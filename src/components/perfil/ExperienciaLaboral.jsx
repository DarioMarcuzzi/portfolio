import React from "react";

const ExperienciaLaboral = ({ experiencia }) => {
  return (
    <div className="relative pb-10">
      {/* Línea vertical para marcar la progresión */}
      <div
        data-aos="zoom-in"
        className="absolute top-0 left-2 w-0.5 h-full bg-gradient-to-t from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900"
      ></div>

      <div className="flex items-start mb-8 pl-10">
        <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full h-10 w-10 flex items-center justify-center shadow-md">
          {/* Ícono de empresa o puesto (si se desea agregar un ícono o imagen) */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 8c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0-2c-1.38 0-2.75-.56-3.74-1.47-.98-.91-1.63-2.17-1.63-3.53h2c0 .89.36 1.71.94 2.3.57.58 1.38.93 2.29.93 1.66 0 3-1.34 3-3s-1.34-3-3-3c-.91 0-1.72.42-2.29 1.06C11.36 7.29 11 8.11 11 9h-2c0-2.21 1.79-4 4-4z"
            />
          </svg>
        </div>

        <div className="ml-6 w-full">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            {experiencia.puesto}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
            <span className="font-medium">Empresa: </span>{experiencia.empresa}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
            <span className="font-medium">Descripción: </span>{experiencia.descripcion}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="font-medium">Fecha: </span>{experiencia.fecha_inicio} - {experiencia.fecha_fin}
          </p>

          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Responsabilidades:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-400">
            {experiencia.responsabilidades.map((resp, index) => (
              <li key={index} className="text-sm">{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaLaboral;
