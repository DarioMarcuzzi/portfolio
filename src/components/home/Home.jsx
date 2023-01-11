import React, { useEffect, useState } from "react";
import HomeIzq from "./home-izq/HomeIzq.jsx";
import HomeDer from "./home-der/HomeDer.jsx";
import "./home.css";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [medidasHeight, setMedidasHeight] = useState(0);
  const [timing] = useState("2.5s");
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setScreenHeight(window.innerHeight);
    if (window.innerHeight <= 1300 && window.innerHeight >= 1000) {
      setMedidasHeight("1300-1000");
    }
    if (window.innerHeight <= 1000 && window.innerHeight >= 700) {
      setMedidasHeight("1000-700");
    }
  }

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="contenedor-principal-home">
      <div className="contenedor-home">
        <div className="contenedor-home-izq">
          <HomeIzq
            scrollY={scrollY}
            timing={timing}
            screenHeight={screenHeight}
            medidasHeight={medidasHeight}
          />
        </div>
        <div className="contenedor-home-der">
          <HomeDer
            scrollY={scrollY}
            timing={timing}
            screenHeight={screenHeight}
            medidasHeight={medidasHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
