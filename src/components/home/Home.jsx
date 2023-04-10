import React, { useState } from "react";
import db from "../../db.json";
import { Link } from "react-router-dom";

const Home = () => {
  const {users} = db
  const [user, setUser] = useState(0)

  return (
    <div className="relative mx-auto py-10 w-full max-w-7xl  text-gray-700 " >
  <div className="mb-8 flex justify-center items-center">
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        <h2 className="px-3 text-sm text-gray-900 dark:text-gray-700 font-mono md:text-2xl lg:text-3xl xl:text-4xl uppercase">Descubri más!</h2>
        <span className="h-1 w-14 rounded-3xl bg-gray-700" />
      </div>
      <div className="mx-auto px-4 w-full max-w-5xl grid grid-cols-2 gap-y-4 sm:gap-y-10">
        <div className="col-span-full lg:col-span-1 flex flex-col sm:flex-row justify-center items-center">
          <ul className="mb-4 sm:mb-0 px-4 flex sm:flex-col justify-center items-center space-x-3 sm:space-x-0 sm:space-y-3">
            {users?.map((u,i)=>(
              <li key={u.nombre} className={`w-12 h-12 rounded-full overflow-hidden filter ${i !== user ? "saturate-0 hover:brightness-125" : "saturate-100"}`}>
                <button className="w-full h-full" onClick={()=> setUser(i)} >
                  <img src={u.imagen} alt={u.nombre} className="object-cover"/>
                </button>
              </li>
            ))}
          </ul>
          <div className="rounded overflow-hidden">
            <img src={users[user].imagen} alt={users[user].nombre} className="w-full max-w-xs object-cover" />
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 mx-auto lg:mx-0 max-w-lg flex flex-col justify-center space-y-4">
          <span className="font-bold uppercase tracking-wider">
            {users[user].profesion}
          </span>
          <h3 className="text-4xl sm:text-5xl font-bold space-y-2">
            <span className="block">{users[user].nombre}</span>
            <span className="block">{users[user].apellido}</span>
          </h3>
          <p className="py-2 text-base">{users[user].comentario}</p>
          <div className="mb-4 inline-flex space-x-4">
            <a href={users[user].github} className="text-gray-600 hover:text-black dark:hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path></svg>
            </a>
            <a href={users[user].linkedin} className="text-gray-600 hover:text-black  dark:hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/></svg>
            </a>
            <Link to={`/perfil/${users[user].id}`}
            >
              <button className="border-b-2 border-black dark:border-white">
                Ver perfil
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
    }

    export default Home
