import React from "react";

const ExperienciaLaboral = ({ experiencia }) => {
  return (
    <div className="relative pb-8" >
      <div data-aos="zoom-in" className="absolute top-0 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
   
        <div className="flex items-center mb-8 p-4" >
          <div className="flex-shrink-0">
            {/* <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-500 text-white">
            </div> */}
          </div>
          <div className="ml-4">
          
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{experiencia.puesto}</h4>
            <span>Empresa</span>
            <p className="text-gray-500 dark:text-gray-400">{experiencia.empresa}</p>
            <span>Descripción</span>
            <p className="text-gray-700 dark:text-gray-400">{experiencia.descripcion}</p>
            <span>Fecha</span>
            <p className="text-gray-500 dark:text-gray-300">{experiencia.fecha_inicio} - {experiencia.fecha_fin}</p>
            <ul className="list-disc pl-5 mt-2">
            <p className="text-gray-900 dark:text-gray-200">Responsabilidades</p>

              {experiencia.responsabilidades.map((resp) => (
                <li key={resp} className="text-gray-700 dark:text-gray-400">{resp}</li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
};

export default ExperienciaLaboral;
