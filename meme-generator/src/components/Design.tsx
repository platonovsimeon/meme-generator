import React from "react";
import "./Design.css";
const Design = (props:any) => {

  const images = props.memes.map((url:string,id:number)=>{
    return <img className="meme-image" key={id} alt="meme" src={url}/>
  });

  return(
    <div className="Design">
    {images}
    </div>
  );
}

export default Design;
