import React from "react";

const Tecnologia = ({ nombre, icono }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4 justify-center">
      <h4 className="text-xl text-gray-500 font-bold">{nombre}</h4>
      <img src={icono} alt={nombre} className="w-32" />
    </div>
  );
};

export default Tecnologia;
