import React from "react";

const Landing = () => {
  const img =
    "https://res.cloudinary.com/dmpqjroj5/image/upload/v1674325205/foto_landing_jjch3c.png";
  const text1= "Bienvenido/a!"
  const text2= "Somos Dario y Daiana"
  const text3= "Desarrolladores Web Fullstack"

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between max-w-4xl w-full">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center md:text-left max-w-lg mx-auto md:mx-0 md:mr-12"
        >
          <span className="block text-4xl font-bold tracking-tight text-gray-700 mt-6 md:text-6xl xl:text-7xl">
            {text1}
          </span>
          <span
            className="block mt-4 text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-300 md:text-5xl xl:text-6xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {text2}
          </span>
          <span
            className="block mt-4 text-base text-gray-400 md:text-lg xl:text-xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {text3}
          </span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="bg-gray-400 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center w-full max-w-lg md:max-w-3xl lg:max-w-4xl mt-12 md:mt-0"
        >
          <img className="w-full" src={img} alt="Dario y Daiana" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
