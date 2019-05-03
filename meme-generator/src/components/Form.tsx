import React from 'react';
import "./Form.css";

interface Props{
  click(name:string):void
}
const Form = (props:Props)=> {

    let name = "";
    const onNameChange = (event:React.FormEvent<HTMLInputElement>) => {

      name=event.currentTarget.value;
    }
    const click = () => {
      props.click(name);
    }
    return (
      <div className="Form">
        <h1>Meme generator</h1>
        <input onChange={onNameChange} type="text" placeholder="Enter meme text"/>
        <button onClick={click} className="default-button">Generate</button>

      </div>
    );




}

export default Form;
