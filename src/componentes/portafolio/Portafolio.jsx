import React, { Component } from "react";
//import swal from "sweetalert";
import {  Modal,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";


import ArticleList  from './ArticleList';
import ButtonList from './ButtonList';
import data from './data';


import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
import ModalBasico from "./ModalBasico";
//import "./Fakenews.css";
export default class Portafolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:['All',...new Set(data.map(article => article.category))],
            
            proyects:data
        };
      }

  
  
   
    componentDidMount(){

       // this.setState({categories: this.state.categories.add("All") })
       // console.log(this.state.categories)
        //console.log(this.state.proyects) 

    }


	
	

   
	filterCategory = (category) => {
		if (category === 'All'){
		    this.setState({proyects: data})
			return
		}

		const filteredData = data.filter(article => article.category === category);
		
        this.setState({proyects: filteredData})
	}





    render() {    
    return (   

    <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container ">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white portafolio-stroke-header " 
             
                >Galeria</h1>
                <h1 className="position-absolute text-uppercase text-primary">Mi Portafolio</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-2">
                   
                    <ButtonList categorias={this.state.categories} filterCategory={this.filterCategory}/>
                   
                </div>
            </div>
            <div className="row portfolio-container">

                    <ArticleList articles={this.state.proyects} >
                          
                    </ArticleList>  

            </div>
        </div>

       

  
    </div>
      

    );
  }
}





