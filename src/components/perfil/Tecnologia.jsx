import React from "react";

const Tecnologia = ({ nombre, icono }) => {
  return (
    <div className="flex flex-col items-center p-4 w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto transition-transform duration-200 hover:scale-105">
      <div className="flex items-center justify-center bg-white dark:bg-gray-700 rounded-full p-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 shadow-md">
        <img
          src={icono}
          alt={nombre}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
        />
      </div>
      <h4 className="text-center text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-100 font-semibold mt-2">
        {nombre}
      </h4>
    </div>
  );
};

export default Tecnologia;
