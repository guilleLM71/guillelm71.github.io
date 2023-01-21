
import React, { Component,useRef } from "react";
//import swal from "sweetalert";
import {  CircularProgress,  Button,  TextField,  Link,  Grid,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";

import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
import { Form } from "react-bootstrap";
//import "./Fakenews.css";
export default class Contacto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailto: "guillermolaura333@gmail.com",
            name:"",
            emailfrom:"",
            subject:"",
            message:"",
            form: React.createRef()
        
          };
    }
 
    sendmail = e => {
        e.preventDefault()
        var data = {
            service_id: 'service_izgxuug',
            template_id: 'template_lyfb4q4',
            user_id: '-k1mbBrmzqigsoR9b',
            template_params: {
                'from_name':this.state.name ,
                'message':  this.state.message,
                'emailfrom':this.state.emailfrom,
                'subject':this.state.subject
                            
            }
        };
         
       fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8",                 
                      'Access-Control-Allow-Origin': '*'
            }


        }).then(function() {
            console.log("bien")
        }).error(function(error) {
            console.log('Oops... ' + JSON.stringify(error));
        });
       
        
      };
    
      
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
        
      };
    
    

  render() { 
    
    //console.log(this.state.form)

    return (   
     
<div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white portafolio-stroke-header" 
                >Contacto</h1>
                <h1 className="position-absolute text-uppercase text-primary">Contactame</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" onSubmit={this.sendmail} >
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" 
                                        name="name"
                                        value={this.state.name}
                                        onChange={(e) => {this.handleChange(e)}}
                                        className="form-control p-4" 
                                        id="name" 
                                        placeholder="Tu nombre"
                                        required="required" 
                                        
                                        data-validation-required-message="Ingresa tu nombre" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" 
                                        
                                        name="emailfrom"
                                        value={this.state.emailfrom}
                                        onChange={(e) => {this.handleChange(e)}}
                                        className="form-control p-4" 
                                        id="email" placeholder="Tu Email"
                                        required="required" 
                                        data-validation-required-message="Ingresa tu email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" 
                                    name="subject"
                                    value={this.state.subject}
                                    onChange={(e) => {this.handleChange(e)}}
                                    className="form-control p-4" 
                                    id="subject" 
                                    placeholder="Motivo"
                                    required="required" 
                                    data-validation-required-message="Motivo" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" 
                                    name="message"
                                    value={this.state.message}
                                    onChange={(e) => {this.handleChange(e)}}
                                    rows="5" 
                                    id="message" 
                                    placeholder="Mensaje"
                                    required="required"
                                    data-validation-required-message="Tu mensaje"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                          
                                <Button variant="primary" type="submit">
                                    Enviar
                                </Button>
                               
                        

                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

}



