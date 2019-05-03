import React, { Component } from 'react';
import "./Form.css";

const Form = ()=> {



    return (
      <div className="Form">
        <button className="default-button"><label htmlFor="imageInput">Choose an image</label></button>
        <input id="imageInput" accept="image/*" type="file"/>
        <button className="default-button">Generate</button>
      </div>
    );




}

export default Form;
