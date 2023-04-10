import React, { useEffect, useState } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillLightbulbOffFill } from "react-icons/bs";
import audio from "../darkMode/audio.ogg";

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

  const sound = new Audio(audio);
  const changeTheme = () => {
    const changes = !isDarkMode
    sound.play();
    setIsDarkMode(changes);
    localStorage.setItem("isDarkMode", JSON.stringify(changes));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex" data-aos="fade-right"
    data-aos-duration="1000">
    <audio id="sound" src={audio}></audio>
    <button 
      className={`rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-colors duration-200 ${isDarkMode ? "bg-gray-700" : "bg-yellow-400"}`}
      onClick={() => {
        changeTheme();
      }}
    >
      {isDarkMode ? <BsFillLightbulbOffFill className="text-white"/> : <BsFillLightbulbFill className="text-gray-700 "/>}
    </button>
  </div>
  );
};

export default DarkMode;
