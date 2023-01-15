import React, { useEffect, useContext, useRef } from "react";
import { DarkModeContext } from "../context/contex";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import "./darkModeBTN.css";
import audio from "../darkMode/audio.ogg";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (!localStorage.getItem("isDarkMode")) {
    } else {
      toggleDarkMode(localStorage.getItem("isDarkMode"));
    }
  }, []);

  const sound = new Audio(audio);
  const changeTheme = () => {
    sound.play();
    if (!localStorage.getItem("isDarkMode")) {
      localStorage.setItem("isDarkMode", isDarkMode);
    } else {
      if (isDarkMode === "ligth") {
        toggleDarkMode("darkMode");
        localStorage.setItem("isDarkMode", "darkMode");
      } else {
        toggleDarkMode("ligth");
        localStorage.setItem("isDarkMode", "ligth");
      }
    }
  };

  return (
    <div className="contenedor-btn-darkMode">
      <audio id="sound" src={audio}></audio>
      <button
        onClick={() => {
          changeTheme();
        }}
        className={isDarkMode === "darkMode" ? "btn-darkMode" : "btn-ligthMode"}
      >
        {isDarkMode === "darkMode" ? <MdNightlight /> : <MdLightMode />}
      </button>
    </div>
  );
};

export default DarkMode;
