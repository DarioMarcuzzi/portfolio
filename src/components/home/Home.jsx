import React, { useEffect, useState } from "react";
import HomeIzq from "./home-izq/HomeIzq.jsx";
import HomeDer from "./home-der/HomeDer.jsx";
import db from "../../db.json";
import "./home.css";

const Home = () => {
  const dataUser = db;
  // console.log(db);
  const [scrollY, setScrollY] = useState(0);
  const [medidasHeight, setMedidasHeight] = useState(0);
  const [timing] = useState("2.5s");
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // console.log(scrollY);
  // console.log(screenHeight);
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
    if (window.innerHeight <= 1000 && window.innerHeight >= 600) {
      setMedidasHeight("1000-600");
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
    <div className="contenedor-principal-home" id="home">
      <div className="contenedor-home">
        <div className="contenedor-home-izq">
          <HomeIzq
            scrollY={scrollY}
            timing={timing}
            screenHeight={screenHeight}
            medidasHeight={medidasHeight}
            dataUserDM={dataUser.users[0]}
          />
        </div>
        <div className="contenedor-home-der">
          <HomeDer
            scrollY={scrollY}
            timing={timing}
            screenHeight={screenHeight}
            medidasHeight={medidasHeight}
            dataUserDO={dataUser.users[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
