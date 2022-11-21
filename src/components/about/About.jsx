import React from 'react';
import "./About.css"
import Nav from '../nav/Navbar';

const About = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <Nav/>
        <div class="col-md-12">
          <h1>Sobre Nosotros</h1>
          <p className='description'>
            Actualmente diseñamos, rediseñamos y programamos nuevos proyectos y
            sitios de aplicaciones web, ya sea del lado del cliente (Front-end,
            UX / UI) como del lado del servidor (Back-end). Continuamente
            aprendiendo y adquiriendo nuevas habilidades en función a las
            actuales y futuras demandas y tendencias tecnológicas en el campo
            del diseño y desarrollo de aplicaciones web en general. Apasionados
            con el trabajo que realizamos, ofreciendo y aportando n nuestros
            conocimientos, habilidades y experiencias, así como nuevas ideas,
            soluciones, personalización y seguimiento de calidad al cliente y su
            objetivo en cada proyecto.
          </p>
        </div>
        <div class="row">
          <div class="col">
            <p className='tech'>
              Desarrollo FrontEnd (lado del cliente) 
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Material UI</li>
              <li>Grid</li>
              Programas: 
              <li>Visual Studio Code</li>
              Frameworks: 
              <li>Bootstrap 5</li>
              Control de versiones: 
              <li>Git/GitHub</li>
            </p>
          </div>
          <div class="col">
            <p className='tech'>
              Desarrollo BackEnd (lado del servidor) 
              <li>Node.js</li>
              <li>Express</li>
              <li>REST API</li>
              <li>JSON</li>
              <li>JWT</li>
              <li>Sequelize</li>
              <li>Heroku</li>
              <li>Cloudinary</li>
              Base de datos
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;