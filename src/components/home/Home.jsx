import React, { useState } from "react";
import db from "../../db.json";
import { Link } from "react-router-dom";

const Home = () => {
  const { users } = db;
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className=" bg-gray-100 dark:bg-gray-900 py-14 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Conoce a nuestros profesionales
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Lista de usuarios */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-2">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 border-4 ${
                  user.id === selectedUser.id
                    ? "border-blue-500"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <img
                  src={user.imagen}
                  alt={`${user.nombre} ${user.apellido}`}
                  className="object-cover w-full h-40 sm:h-48"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Detalle del usuario seleccionado */}
          <div className="w-full lg:flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
              {selectedUser.nombre} {selectedUser.apellido}
            </h3>
            <p className="text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400">
              {selectedUser.profesion}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {selectedUser.comentario}
            </p>

            <div className="flex gap-4 items-center justify-center lg:justify-start mt-6">
              <a
                href={selectedUser.github}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                aria-label={`GitHub de ${selectedUser.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .296C5.37.296 0 5.666 0 12.298c0 5.29 3.438 9.777 8.205 11.363.6.113.82-.262.82-.583 0-.288-.01-1.051-.015-2.063-3.338.726-4.042-1.609-4.042-1.609-.546-1.388-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.832 2.809 1.303 3.495.997.108-.774.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.468-2.38 1.235-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.533 11.533 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.649.243 2.872.12 3.176.77.841 1.232 1.911 1.232 3.221 0 4.61-2.807 5.624-5.479 5.922.43.372.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .324.216.699.825.58C20.565 22.072 24 17.586 24 12.297 24 5.666 18.627.296 12 .296z" />
                </svg>
              </a>
              <a
                href={selectedUser.linkedin}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                aria-label={`LinkedIn de ${selectedUser.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.604 4.083 5.5 2.98 5.5S1 4.604 1 3.5 1.898 1.5 3 1.5c1.104 0 1.98.896 1.98 2zM1.22 8.996h3.56V22H1.22V8.996zM8.64 8.996h3.412v1.784h.048c.475-.9 1.635-1.848 3.366-1.848 3.6 0 4.268 2.37 4.268 5.456V22h-3.56v-6.704c0-1.6-.028-3.652-2.224-3.652-2.226 0-2.565 1.74-2.565 3.534V22H8.64V8.996z" />
                </svg>
              </a>
              <Link
                to={`/perfil/${selectedUser.id}`}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold shadow transition-colors text-white"
              >
                Ver perfil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
