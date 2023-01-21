
import React, { Component } from "react";
//import swal from "sweetalert";
import {  Modal,} from "@mui/material";
//import {Typed} from "../../lib/typed/typed.js";

import "../../scss/bootstrap/scss/bootstrap.scss";
import ReactTypingEffect from "react-typing-effect";
//import "./Fakenews.css";

export default class ButtonList extends React.Component {
    constructor(props) {
      super(props)  
	  this.state={
		
	  }
    }

	componentDidMount(){
	
	}

    render() {    
return (   
	<div className='categories'>
		{this.props.categorias.map((category)=> {
			return (
			<button
				type='button'
				className='btn btn-sm btn-outline-primary m-1'
				onClick={() => this.props.filterCategory(category)}
				key={category}
			>
				{category}
			</button>
			)
		}
		)}
	</div>

    );
  }
}









