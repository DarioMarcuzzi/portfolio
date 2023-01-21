import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "../context/contex";
import "./Landing.css";

const Landing = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    typeWriter();
  }, []);

  let i = 0;

  const text = "Bienvenido!";
  const textC = "Bienvenido! Somos Daiana y Dario ";
  const textB = `Bienvenido! Somos Daiana y Dario "Desarrolladores FullStack Web Developers" `;
  const speed = 80;
  const speed2 = 200;

  function typeWriter() {
    // console.log(i);
    if (i < textB.length && i >= 32) {
      document.getElementById("saludo1").innerHTML += textB.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    if (i >= 11 && i < 32) {
      document.getElementById("nombres").innerHTML += textC.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    if (i < 11) {
      document.getElementById("saludo").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed2);
    }
  }
  return (
    <div className="parent" id="landing">
      <div className="div2">
        <label id="saludo1">
          <p id="saludo"></p>
          <h1 id="nombres"> </h1>
        </label>
      </div>
      <div className="div3">
        <img
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1674325205/foto_landing_jjch3c.png"
          alt="Dario y Daiana"
        />
      </div>
    </div>
  );
};

export default Landing;
