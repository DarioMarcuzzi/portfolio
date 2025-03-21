import React, { useEffect, useState } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillLightbulbOffFill } from "react-icons/bs";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode") === "true");
  useEffect(() => {
    if (localStorage.getItem("isDarkMode") === "true") {
      document.documentElement.classList.add("dark")
    }
  }, []);

  useEffect(() => {
    const onUrlChange = () => {
      setIsDarkMode(localStorage.getItem('isDarkMode') === 'true');
    };
    window.addEventListener('hashchange', onUrlChange);
    return () => {
      window.removeEventListener('hashchange', onUrlChange);
    };
  }, []);

  const changeTheme = () => {
    const changes = !isDarkMode
    setIsDarkMode(changes);
    localStorage.setItem("isDarkMode", JSON.stringify(changes));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex">
    <button 
      className="rounded-full shadow-lg w-10 h-10 flex items-center justify-center focus:outline-none transition-colors duration-200 "
      onClick={() => { 
        changeTheme();
      }}>
      {isDarkMode ? <BsFillLightbulbOffFill className="text-white"/> : <BsFillLightbulbFill className="text-gray-900 "/>}
    </button>
  </div>
  );
};

export default DarkMode;
