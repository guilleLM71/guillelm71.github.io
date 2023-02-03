
import React, { Component } from "react";
//import swal from "sweetalert";
import {  CircularProgress,  Button,  TextField,  Link,  Grid,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";


import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
import { ProgressBar } from "react-bootstrap";
import ProgressLine from "./ProgressLine";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNodejsSmall, DiPython } from "react-icons/di";
//import "./Fakenews.css";
import { TbBrandJavascript, TbBrandPhp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
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
                    <div className="skill mb-4 d-flex">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">HTML</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>
                        <AiFillHtml5 size={60} className="ml-2"></AiFillHtml5>
                    </div>
                    <div className="skill mb-4 d-flex">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">CSS</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>
                          
                         <DiCss3 size={60} className="ml-2"></DiCss3>              
                    </div>
               
                    <div className="skill mb-4 d-flex ">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">Javascript</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>
                        <TbBrandJavascript size={60} className="ml-2" ></TbBrandJavascript>
                    </div>

                    <div className="skill mb-4 d-flex ">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">PHP</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>
                        <TbBrandPhp size={60} className="ml-2" ></TbBrandPhp>
                    </div>

                    <div className="skill mb-4 d-flex">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">Node JS</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>
                        <DiNodejsSmall size={60} className="ml-2" ></DiNodejsSmall>

                    </div>
                </div>
                <div className="col-md-6">                   
                    <div className="skill mb-4 d-flex">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">JAVA</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                            
                        </div>
                        <FaJava size={60} className="ml-2" ></FaJava>
                     </div>
                    <div className="skill mb-4 d-flex ">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">C#</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>
                                <SiCsharp size={60} className="ml-2" ></SiCsharp>       
                    </div>
                    <div className="skill mb-4 d-flex ">
                        <div className="d-flex flex-column">
                            <h6 className="font-weight-bold ml-4">PYTHON</h6>
                            <h6 className="font-weight-bold ml-4">Nivel: Intermedio</h6>
                        </div>  
                        <DiPython size={60} className="ml-2" ></DiPython>                    
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
                <div className="col-md-4 border-left border-primary pt-2 pl-4 ml-2">
                    <div className="skills mb-6">
                        <div className="position-relative ex-me mb-4 ">
                             <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">Solidity</h6>   
                        </div>
                       
                    </div>
                    <div className=" skills mb-6">
                        <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">React</h6>
    
                        </div>
                    </div>
                    <div className="skills mb-6">
                    <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">SQL (MySQL, PostGres, Oracle)</h6>
    
                        </div>
                     
                    </div>
                    <div className="skills mb-6">
                    <div className="position-relative ex-me mb-4">
                        <i className="far fa-dot-circle text-primary position-absolute exp" 
                            
                            ></i>
                            <h6 className="font-weight-bold">NoSQL (MongoDB)</h6>
    
                        </div>             
                    </div>
                    <div className="skills mb-6">
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




