import React from "react";

const Footer = () => {

  return (
    <footer>
  <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 h-">
    {/* <nav className=" flex flex-wrap gap-4 justify-center" aria-label="Footer">
      <div><a href="#landing" className="text-base text-gray-500 hover:text-gray-900">Landing</a></div>
      <div><a href="#about" className="text-base text-gray-500 hover:text-gray-900">Sobre Nosotros</a></div>
      <div><a href="#home" className="text-base text-gray-500 hover:text-gray-900">Decubri mas</a></div>
    </nav> */}
    <div className="flex justify-center items-center flex-col p-2">
    <img src="https://res.cloudinary.com/dcpcja2qg/image/upload/v1672409846/logoDD_logj6a.png"
          alt="Logo"
          className="h-14 invert dark:filter-none " />
    </div>
    <p className="text-center text-base text-gray-700">© 2023 Daiana Olivares y Dario Marcuzzi</p>
  </div>
</footer>
  );
};

export default Footer;
