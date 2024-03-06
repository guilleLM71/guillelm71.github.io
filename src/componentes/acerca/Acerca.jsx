
import React, { Component } from "react";
//import swal from "sweetalert";
import {  CircularProgress,  Button,  TextField,  Link,  Grid,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";


import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
//import "./Fakenews.css";
export default class Acerca extends React.Component {
 
  



  render() {    
    return (   
     
<div className="container-fluid py-5" id="about">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase text-white portafolio-stroke-header" 
               
                >Acerca de mi</h1>
                <h1 class="position-absolute text-uppercase text-primary">Acerca de mi</h1>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-5 pb-4 pb-lg-0">
                    <img class="img-fluid rounded w-100" src="img/" alt=""/>
                </div>
                <div class="col-lg-7">
                    <h3 class="mb-4">Diseñador UI/UX Y Desarrollador Web - Backend|Frontend</h3>
                    <p>Soy licenciado en informatico de la UMSA con muchos conocimientos en varias ramas tecnologicas, capaz
                        de solucionar problemas de manera eficiente.
                                            </p>
                    <div class="row mb-3">
                        <div class="col-sm-6 py-2"><h6>Nombre: <span class="text-secondary">Juan Guillermo Laura Mamani</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Fecha Nac: <span class="text-secondary">7 de Enero 1998</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Grado: <span class="text-secondary">Licenciado en Informatica</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Experiencia: <span class="text-secondary">4 años</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Celular: <span class="text-secondary">78889375</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">jguillermolaura@gmail.com</span></h6></div>                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

}