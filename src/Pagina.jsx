import React, { Component } from "react";
//import swal from "sweetalert";

import { Link, animateScroll as scroll } from "react-scroll";
import Navegacion from "./componentes/navegacion/Navegacion";
import Perfil from "./componentes/perfil/Perfil";
import Acerca from "./componentes/acerca/Acerca";
import Skills from "./componentes/skills/skills";
import Cualidades from "./componentes/cualidades/Cualidades";
import Portafolio from "./componentes/portafolio/Portafolio";
import Contacto from "./componentes/contacto/Contacto";




//import "./Fakenews.css";
export default class Pagina extends React.Component {
  scrollToTop=() =>{
    scroll.scrollToTop();
  }
  scrollToBottom=() =>{
    scroll.scrollToBottom();
  }
  render() {    
    return (   
        <div>
          <section id="Inicio">
          <Navegacion></Navegacion>
          </section >
          <section id="Inicio">
          <Perfil></Perfil>
          </section>

          <section id="Acerca"> 
          <Acerca></Acerca>
          </section>
          <section id="Skills">
          <Skills></Skills>
          </section>

          <section id="Cualidades">
          <Cualidades></Cualidades>
          </section>
          <section id="Portafolio">
          <Portafolio></Portafolio>
          </section>
          <section id="Contacto">
            <Contacto></Contacto>
          </section>

          <i class="fa fa-2x fa-angle-down text-white scroll-to-bottom" onClick={this.scrollToBottom}></i>

          <a href="#" class="btn btn-outline-dark px-0 back-to-top" onClick={this.scrollToTop}><i class="fa fa-angle-double-up"></i></a>

          </div>
    );
  }
}
