import { useState } from "react";

const MouseEvents = () => {

  const[Message, setMessage]=useState('MouseOver Here');


  const Mouseover=()=>{
    setMessage('Mouse is inside');
  }

  const Mouseout=()=>{
    setMessage('Mouse is outside');
  }


  return(
    <div
      onMouseOver = {Mouseover}
      onMouseOut = {Mouseout}
      style={{
        backgroundColor:'lightblue',
        margin:'70px',
        textAlign:'center',
        border:'1px solid black',
      }}
      >
        
      <h1>{Message}</h1>

      </div>

  )
}

export default MouseEvents;