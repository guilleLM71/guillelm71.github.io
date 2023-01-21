
import React, { Component } from "react";
//import swal from "sweetalert";
import {  CircularProgress,  Button,  TextField,  Link,  Grid,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";


import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
//import "./Fakenews.css";
export default class Cualidades extends React.Component {
 
  



  render() {    
    return (   
        <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white portafolio-stroke-header" 
             
                >Cualidades</h1>
                <h1 className="position-absolute text-uppercase text-primary">Educacion y Experiencia</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">Mi Educacion</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative ex-me mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute educacion" 
                            ></i>
                            <h5 className="font-weight-bold mb-1">Licenciado en Informatica Mencion en Ciencias de la Computacion</h5>
                            <p className="mb-2"><strong>UMSA</strong> | <small>2017-2022</small></p>
                            
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">Mi Experiencia</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative ex-me mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h5 className="font-weight-bold mb-1">Diseñador Web</h5>
                            <p className="mb-2"><strong>Con experiencia en proyectos propios</strong></p>
                        </div>
                        <div className="position-relative ex-me mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute exp" 
                           
                            ></i>
                            <h5 className="font-weight-bold mb-1">Inteligencias Artificial</h5>
                            <p className="mb-2"><strong>Con experiencia en proyectos propios</strong> </p>
                            <p className="mb-2"><strong>Investigaciones de Grado Universitario</strong> </p>
                        </div>
                        <div className="position-relative ex-me mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute exp" 
                      
                            ></i>
                            <h5 className="font-weight-bold mb-1">Desarrollador Web</h5>
                            <p className="mb-2"><strong>Con experiencia en proyectos propios</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }
}






