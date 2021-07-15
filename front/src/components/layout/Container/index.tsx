import React from "react";
import { Link } from "react-router-dom";

function Container(props){
  return(
    <>
      <div className="container"
          onClick={()=>{
          console.log("Clicou")
      }}>
        <h1>{props.name}</h1>
        <p><Link to={props.link}>Acessar {props.name}</Link></p>
     </div>
    </>
  )
};
export default Container;