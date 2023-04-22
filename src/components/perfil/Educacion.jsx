import React from "react";

const Educacion = ({educacion}) =>{
    return (
        <div className="flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg shadow-xl p-4">
            <h4 className="text-xl text-gray-500 font-bold">{educacion.nombre}</h4>
            <img src={educacion.imagen} alt="" className="w-full " />
            <ul className="mt-2 text-gray-700">
                <li className="flex border-t border-b py-2 gap-4 flex-col">
                    <span className="font-bold">Descripcion</span>
                    <span className="text-gray-700">{educacion.descripcion}</span>
                </li>
            </ul>
            <a href={educacion.link} 
                target="_blank"
                rel="noreferrer"
                className="border-b-2 border-gray-500"
            >
                Ver mas
            </a>
        </div>
    )
}

export default Educacion