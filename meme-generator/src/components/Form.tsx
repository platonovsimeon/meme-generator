import React from 'react';
import "./Form.css";

interface Props{
  click():void
}
const Form = (props:Props)=> {



    return (
      <div className="Form">
        <h1>Meme generator</h1>
        <button onClick={props.click} className="default-button">Generate</button>

      </div>
    );




}

export default Form;
