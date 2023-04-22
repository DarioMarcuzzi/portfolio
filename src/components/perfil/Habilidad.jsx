import React from "react";

const Habilidad = ({habilidad}) =>{
    return (
        <div key={habilidad.id} className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4 justify-center">
        <h4 className="text-xl text-gray-500 font-bold">{habilidad.nombre}</h4>
        <img src={habilidad.icono} alt={habilidad.nombre} className="w-32" />
        </div>
)}

export default Habilidad;
