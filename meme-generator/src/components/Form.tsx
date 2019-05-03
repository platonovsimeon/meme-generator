import React from 'react';
import "./Form.css";

interface Props{
  click(name:string,name2:string):void
}
const Form = (props:Props)=> {

    let name = "";
    let name2 = "";
    const onNameChange = (event:React.FormEvent<HTMLInputElement>) => {

      name=event.currentTarget.value;
    }
    const onName2Change = (event:React.FormEvent<HTMLInputElement>) => {

      name2=event.currentTarget.value;
    }
    const click = () => {
      props.click(name,name2);
    
    }
    return (
      <div className="Form">
        <h1>Meme generator</h1>
        <input className="meme-text-field" onChange={onNameChange} type="text" placeholder="Enter meme text"/>
        <input className="meme-text-field" onChange={onName2Change} type="text" placeholder="Enter meme text 2"/>
        <button onClick={click} className="generate-button">Generate</button>

      </div>
    );




}

export default Form;
