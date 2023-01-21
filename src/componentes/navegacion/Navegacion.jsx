import React, { Component } from "react";
//import swal from "sweetalert";
//import NoticiaEncontrada from "./NoticiaEncontrada";

import { Link, animateScroll as scroll } from "react-scroll";
//import "./Fakenews.css";
export default class Navegacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount = () => {
    
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  
  peticion = async () => {
     
  };

  render() {    
    return (   
        <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3">            
        </a>
       
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
                 <Link
                 
                className="nav-item nav-link "
                activeClass="active"
                to="Inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Inicio
                </Link>

                <Link
                className="nav-item nav-link"
                activeClass="active"
                to="Acerca"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Acerca de mi
                </Link>

                
                <Link
                className="nav-item nav-link"
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
              Skills
                </Link>
                               
                <Link
                className="nav-item nav-link"
                activeClass="active"
                to="Cualidades"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
               Cualidades
                </Link>
                <Link
                className="nav-item nav-link"
                activeClass="active"
                to="Portafolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
             Portafolio
                </Link>

                <Link
                className="nav-item nav-link"
                activeClass="active"
                to="Contacto"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
             Contacto
                </Link>
           

               
           
               
            </div>
        </div>
    </nav>
 
    
    );
  }
}
