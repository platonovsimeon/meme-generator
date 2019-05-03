import {GET_TEMPLATES, GET_MEMES} from "./constants";
import {Dispatch} from "redux";


export interface MemeTemplate{
  id:string
}
export interface GetTemplates{
  type: GET_TEMPLATES,
  payload: MemeTemplate[]
}



export interface GetMeme{
  type: GET_MEMES,
  payload: string
}

export type AppAction = GetTemplates | GetMeme;
export const getTemplates = ()=>(dispatch:Dispatch<GetTemplates>)=> {
    fetch("https://api.imgflip.com/get_memes").then(response=>response.json()).then(data=>{
      const templates = data.data.memes.map((meme:any)=>{
        return {id:meme.id}
      });
      dispatch({type:GET_TEMPLATES,payload:templates});
    });
}




export const getMemes = (templates:MemeTemplate[],name:string)=>(dispatch:Dispatch<GetMeme>) => {

  interface Params{
    [key:string]:string;
  }
  for(let i=0;i<templates.length;i++){
    const id = templates[i].id;


    let params:Params = {
      template_id:id,
      text0:name,
      username:"simeonplatonov",
      password:"1234567S"

    };

    const bodyParams = Object.keys(params).map(key => {
 return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');

    fetch("https://api.imgflip.com/caption_image",{headers:{'Content-Type': "application/x-www-form-urlencoded"},method:"POST",body:bodyParams}).then(response=>response.json())
    .then(data=>{

      dispatch({type:GET_MEMES,payload:data.data.url});

    });
  };
}
