import React, { useEffect} from "react";
import "./Landing.css";

const Landing = () => {
  useEffect(() => {
    typeWriter();
  }, []);

  let i = 0;

  const text = "Bienvenido!";
  const textB = `Bienvenido Somos Daiana y Dario "Desarrolladores FullStack Web Developers" `;
  const speed = 80;
  const speed2 = 200;

  function typeWriter() {
    if (i < textB.length && i > 10) {
      document.getElementById("saludo1").innerHTML += textB.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (i < 11) {
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
        </label>
      </div>
      <div className="div3">
          <img src="https://i.ibb.co/0nQqQZp/daiana.png" alt="Dario y Daiana"/>
      </div>
    </div>
  );
};

export default Landing;
