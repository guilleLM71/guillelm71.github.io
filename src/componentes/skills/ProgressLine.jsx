import React, { useEffect, useState } from "react";
var visual=[]
class ProgressLine extends React.Component {
   

    constructor(props) {
        super(props);
        this.state={
          value:0
        }
       
    
      }

      componentDidMount(){
        this.setState({value:((this.props.percent * 330)/100)});
      }
 

     render(){

      
        return (
          <div>
      <div className="progress-div" style={{ width: 330 }}>
        <div style={{ width: (this.state.value+"px"),backgroundColor:this.props.color}} className="progress2" />
      </div>
    </div>
          );
     } 
} 

 


export default ProgressLine;
