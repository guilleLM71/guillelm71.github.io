import React, { Component } from "react";
//import swal from "sweetalert";
import {  CircularProgress,  Button,  TextField,  Link,  Grid,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";


import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
//import "./Fakenews.css";
export default class Perfil extends React.Component {
 
  



  render() {    
    return (   
     <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{minHeight: "100vh"}}>
     <div className="container">       
    

    <div className="d-flex .flex-row align-items-center">
       
        <div className="col-lg-8 text-center text-lg-left " >
            <h3 className="text-white font-weight-normal mb-3 mt-4 pt-3">Hola, soy</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2 name-stroke-header" >Juan Guillermo Laura Mamani</h1>
            <h1 >
            <ReactTypingEffect className="typed-stroke-header d-inline font-weight-lighter text-white d-none "
            text={["Desarrollador Backend", "Desarrollador Frontend" ,"Data Science", "Desarrollador Blockchain"]}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}                    
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}    
        speed={70}
        eraseDelay={300}
        eraseSpeed={40}
        typingDelay={300}
            
            /></h1>
          
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a target="_blank" href="https://drive.google.com/file/d/1fkeZUwVTPP0yMNV1Cc4UCO7EBDgsIOyL/view?usp=share_link" className="btn btn-white  btn-dark mr-4">Descargar CV</a>
            </div>
        </div>
        <div className="col-lg-6 px-8 pl-lg-0 pb-5 pb-lg-4 about-img">
            <img className="w-70 rounded-circle shadow-sm" 
            src="https://i.postimg.cc/qhKbqK0b/foto2.jpg" 
            alt=""
   
            width={"70%"}
            height={"auto"} 
            />
        </div>
    </div>
    </div> </div> 

    );
  }
}



