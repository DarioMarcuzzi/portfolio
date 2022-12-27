import React from 'react'
import Nav from "../nav/Navbar";
import "./Contact.css";
import{AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import {SiGmail,SiMicrosoftoutlook} from "react-icons/si";


function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <div className="col-md-12">
          <h1>Contacto</h1>
          <p className="description">
            Si desea contactarnos, puede hacerlo a través de los siguientes
            medios:
          </p>
          <div className="row">
            <div className="col">
              <p className="tech"> Daiana Olivares
              <br/>
                <li>Correo electrónico: <SiGmail/></li>
                <br/>
                <li>GitHub: <AiFillGithub/></li>
                <br/>
                <li>Linkedin: <AiFillLinkedin/></li>
              </p>
            </div>
            <div className="col">
              <p className="tech"> Dario Marcuzzi
              <br/>
                <li>Correo electrónico: <SiMicrosoftoutlook/></li>
                <br/>
                <li>GitHub: <AiFillGithub/></li>
                <br/>
                <li>Linkedin: <AiFillLinkedin/></li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact