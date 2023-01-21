
import React, { Component } from "react";
//import swal from "sweetalert";
import {  CircularProgress,  Button,  TextField,  Link,  Grid,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";


import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
import { ProgressBar } from "react-bootstrap";
import ProgressLine from "./ProgressLine";
//import "./Fakenews.css";
export default class Skills extends React.Component {
 
  



  render() {    
    return (   
        <>
        <div className="container-fluid py-5" id="skill">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white portafolio-stroke-header" 
               
                >Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">Skills</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">HTML</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                        
                       
                        <ProgressLine
                            percent= {70}
                            color={"blue"}
                        />
                       
                    
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">CSS</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                          
                        <ProgressLine
                            percent= {70}
                            color={"red"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">PHP</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">65%</h6>
                        </div>
                         
                        <ProgressLine
                            percent= {65}
                            color={"orange"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Javascript</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">75%</h6>
                        </div>
                         
                        <ProgressLine
                            percent= {75}
                            color={"skyblue"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Node JS</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">70%</h6>
                        </div>
                          
                        <ProgressLine
                            percent= {70}
                            color={"blue"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Wordpress</h6>
                            <h6 className="font-weight-bold">Nivel: Basico</h6>
                            <h6 className="font-weight-bold">35%</h6>
                        </div>
                        
                        <ProgressLine
                            percent= {35}
                            color={"red"}
                        />
                       
                    </div>
                </div>
                <div className="col-md-6">                   
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">JAVA</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                          
                        <ProgressLine
                            percent= {80}
                            color={"orange"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">C#</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">80%</h6>
                        </div>
                         
                        <ProgressLine
                            percent= {80}
                            color={"blue"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">PYTHON</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">75%</h6>
                        </div>
                          
                        <ProgressLine
                            percent= {75}
                            color={"green"}
                        />
                       
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">C++</h6>
                            <h6 className="font-weight-bold">Nivel: Intermedio</h6>
                            <h6 className="font-weight-bold">40%</h6>
                        </div>
                          
                        <ProgressLine
                            percent= {40}
                            color={"red"}
                        />
                       
                    </div>
                    
                
                </div>
            </div>
        </div>
    </div>
    
   
    <div className="container-fluid py-5 "  >
        <div className="container ">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white portafolio-stroke-header"
                
                >Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">Skills Secundarios</h1>
            </div>
            <div className=" d-flex align-items-center justify-content-center ">
                <div className="col-md-6 border-left border-primary pt-2 pl-4 ml-2">
                    <div className="skill mb-6">
                        <div className="position-relative ex-me mb-4 ">
                             <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">Solidity</h6>   
                        </div>
                       
                    </div>
                    <div className="skill mb-6">
                        <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">React</h6>
    
                        </div>
                    </div>
                    <div className="skill mb-6">
                    <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">SQL (MySQL, PostGres, Oracle)</h6>
    
                        </div>
                     
                    </div>
                    <div className="skill mb-6">
                    <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">NoSQL (MongoDB)</h6>
    
                        </div>             
                    </div>
                    <div className="skill mb-6">
                    <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">Pack Adobe (PS, AI, AE, PR, XD)</h6>
    
                        </div>
                    </div>
                   
                </div>      
                
            </div>
            
        </div>
    </div>
    </>

    );
  }
}




